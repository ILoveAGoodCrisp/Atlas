import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import {
  canonicalExistingPath,
  canonicalExistingPathWithin,
  chooseContainingKitGame,
  compileStatusTooltip,
  containsFatalToolOutput,
  createScenarioArgument,
  choosePreferredScenario,
  discoverScenarios,
  expandToolArguments,
  gameForDefaultInstallDirectory,
  HALO_EDITING_KIT_IDS,
  HALO_EDITING_KITS,
  HALOSCRIPT_LANGUAGE_IDS,
  HaloGameConfig,
  isCanonicalScriptPathInKit,
  isSafeSteamInstallDirectory,
  isPathWithin,
  KitGameCandidate,
  parseSteamInstallDirectory,
  parseSteamLibraryFolders,
  selectHaloGame,
  ScenarioDiscovery,
  supportsScenarioCompilation
} from './compilerCore';

const COMMAND_ID = 'atlas.compileScenarioScripts';
const CHOOSE_SCENARIO_COMMAND_ID = 'atlas.compileScenarioScripts.chooseScenario';
const CONFIGURATION_SECTION = 'atlas.compiler';
const COMPILE_ENABLED_CONTEXT = 'atlas.compiler.activeScriptCanCompile';
const OUTPUT_NAME = 'HaloScript Compiler';
const MAX_CAPTURE_LENGTH = 2 * 1024 * 1024;

interface KitQuickPickItem extends vscode.QuickPickItem {
  kitRoot: string;
}

interface ScenarioQuickPickItem extends vscode.QuickPickItem {
  scenarioPath?: string;
  browse?: boolean;
}

interface ToolResult {
  code: number | null;
  signal: string | null;
  output: string;
  fatalOutput: boolean;
  spawnError?: Error;
}

interface DetectedKit {
  game: HaloGameConfig;
  kitRoot: string;
  approvedForExecution: boolean;
}

interface LanguageDetectionResult {
  document: vscode.TextDocument;
  detectedKit?: DetectedKit;
}

interface DetectionCandidate extends KitGameCandidate {
  approvedForExecution: boolean;
}

let outputChannel: vscode.OutputChannel | undefined;
let statusBarItem: vscode.StatusBarItem | undefined;
let runningProcess: childProcess.ChildProcessWithoutNullStreams | undefined;
let compilationInProgress = false;
let steamLibrariesPromise: Promise<string[]> | undefined;
let steamKitCandidatesPromise: Promise<DetectionCandidate[]> | undefined;
let kitDetectionGeneration = 0;
let statusRefreshGeneration = 0;
let compileCommandEnabled: boolean | undefined;
const languageDetectionPromises = new Map<
  string,
  {document: vscode.TextDocument; promise: Promise<LanguageDetectionResult>}
>();

function setCompileCommandEnabled(enabled: boolean): void {
  if (compileCommandEnabled === enabled) {
    return;
  }
  compileCommandEnabled = enabled;
  void vscode.commands.executeCommand('setContext', COMPILE_ENABLED_CONTEXT, enabled);
}

function compilerConfiguration(): vscode.WorkspaceConfiguration {
  return vscode.workspace.getConfiguration(CONFIGURATION_SECTION);
}

function getPathSetting(kitId: string): string | undefined {
  const configuredPaths = compilerConfiguration().get<{[kitId: string]: string}>('editingKitPaths', {});
  const configuredPath = configuredPaths[kitId];
  return configuredPath ? expandEnvironmentVariables(configuredPath.trim()) : undefined;
}

function expandEnvironmentVariables(value: string): string {
  return value
    .replace(/%([^%]+)%/g, (match, name: string) => process.env[name] || match)
    .replace(/\$\{env:([^}]+)\}/g, (match, name: string) => process.env[name] || match);
}

function normalizeKitRoot(value: string): string {
  const resolved = path.resolve(value);
  return path.basename(resolved).toLowerCase() === 'tool.exe' ? path.dirname(resolved) : resolved;
}

function canonicalKitRoot(value: string): string | undefined {
  try {
    const root = canonicalExistingPath(normalizeKitRoot(value));
    if (!fs.statSync(root).isDirectory()) {
      return undefined;
    }

    const toolExecutable = canonicalExistingPathWithin(root, path.join(root, 'tool.exe'));
    if (
      !fs.statSync(toolExecutable).isFile() ||
      !isPathWithin(root, toolExecutable) ||
      !samePath(path.dirname(toolExecutable), root) ||
      path.basename(toolExecutable).toLowerCase() !== 'tool.exe'
    ) {
      return undefined;
    }
    return root;
  } catch {
    return undefined;
  }
}

function isUsableKitRoot(value: string): boolean {
  return canonicalKitRoot(value) !== undefined;
}

function samePath(left: string, right: string): boolean {
  const leftPath = path.resolve(left);
  const rightPath = path.resolve(right);
  return process.platform === 'win32'
    ? leftPath.toLowerCase() === rightPath.toLowerCase()
    : leftPath === rightPath;
}

function uniquePaths(paths: string[]): string[] {
  const results: string[] = [];
  paths.forEach(candidate => {
    if (candidate && !results.some(existing => samePath(existing, candidate))) {
      results.push(path.resolve(candidate));
    }
  });
  return results;
}

function findAdjacentKitRoot(scriptPath: string): string | undefined {
  let currentDirectory = path.dirname(path.resolve(scriptPath));

  while (true) {
    if (isUsableKitRoot(currentDirectory)) {
      try {
        const entries = fs.readdirSync(currentDirectory, {withFileTypes: true});
        const hasData = entries.some(entry => entry.isDirectory() && entry.name.toLowerCase() === 'data');
        const hasTags = entries.some(entry => entry.isDirectory() && entry.name.toLowerCase() === 'tags');
        if (hasData && hasTags) {
          return canonicalKitRoot(currentDirectory);
        }
      } catch {
        // Continue walking; a manually configured root can still be used later.
      }
    }

    const parentDirectory = path.dirname(currentDirectory);
    if (parentDirectory === currentDirectory) {
      return undefined;
    }
    currentDirectory = parentDirectory;
  }
}

function executeForOutput(executable: string, args: string[]): Promise<string> {
  return new Promise(resolve => {
    childProcess.execFile(
      executable,
      args,
      {encoding: 'utf8', windowsHide: true},
      (_error, stdout, stderr) => resolve(String(stdout || '') + String(stderr || ''))
    );
  });
}

async function registrySteamRoots(): Promise<string[]> {
  const windowsDirectory = process.env.SystemRoot || 'C:\\Windows';
  const regExecutable = path.join(windowsDirectory, 'System32', 'reg.exe');
  if (!fs.existsSync(regExecutable)) {
    return [];
  }

  const queries = [
    ['query', 'HKCU\\Software\\Valve\\Steam', '/v', 'SteamPath'],
    ['query', 'HKLM\\SOFTWARE\\WOW6432Node\\Valve\\Steam', '/v', 'InstallPath']
  ];
  const outputs = await Promise.all(queries.map(args => executeForOutput(regExecutable, args)));
  const results: string[] = [];

  outputs.forEach(output => {
    const match = /^\s*(?:SteamPath|InstallPath)\s+REG_\w+\s+(.+?)\s*$/mi.exec(output);
    if (match) {
      results.push(match[1]);
    }
  });
  return uniquePaths(results);
}

function commonSteamRoots(): string[] {
  const results: string[] = [];
  const programFilesX86 = process.env['ProgramFiles(x86)'];
  const programFiles = process.env.ProgramFiles;
  const localAppData = process.env.LOCALAPPDATA;

  if (programFilesX86) {
    results.push(path.join(programFilesX86, 'Steam'));
  }
  if (programFiles) {
    results.push(path.join(programFiles, 'Steam'));
  }
  if (localAppData) {
    results.push(path.join(localAppData, 'Steam'));
  }
  return results;
}

function readSteamLibraries(steamRoot: string): string[] {
  const libraries = [steamRoot];
  const libraryFoldersPath = path.join(steamRoot, 'steamapps', 'libraryfolders.vdf');

  try {
    const contents = fs.readFileSync(libraryFoldersPath, 'utf8');
    libraries.push(...parseSteamLibraryFolders(contents).filter(libraryPath => path.isAbsolute(libraryPath)));
  } catch {
    // A missing or unreadable VDF simply means this Steam root is not usable.
  }
  return uniquePaths(libraries);
}

function getSteamLibraries(): Promise<string[]> {
  if (!steamLibrariesPromise) {
    steamLibrariesPromise = (async () => {
      const discoveredSteamRoots = [...commonSteamRoots(), ...await registrySteamRoots()];
      const steamRoots = uniquePaths(discoveredSteamRoots.filter(steamRoot => path.isAbsolute(steamRoot)));
      return uniquePaths(steamRoots.reduce<string[]>(
        (allLibraries, steamRoot) => allLibraries.concat(readSteamLibraries(steamRoot)),
        []
      ));
    })();
  }
  return steamLibrariesPromise;
}

async function findSteamKitRoots(game: HaloGameConfig): Promise<string[]> {
  const libraries = await getSteamLibraries();
  const candidates: string[] = [];

  libraries.forEach(library => {
    const steamAppsDirectory = path.join(library, 'steamapps');
    const manifestPath = path.join(steamAppsDirectory, `appmanifest_${game.steamAppId}.acf`);
    let installDirectory: string | undefined;

    try {
      installDirectory = parseSteamInstallDirectory(fs.readFileSync(manifestPath, 'utf8'));
    } catch {
      return;
    }
    if (!installDirectory || !isSafeSteamInstallDirectory(installDirectory)) {
      return;
    }

    const commonDirectory = path.join(steamAppsDirectory, 'common');
    const candidate = path.join(commonDirectory, installDirectory);
    const canonicalCandidate = canonicalKitRoot(candidate);
    if (canonicalCandidate) {
      try {
        const canonicalCommon = canonicalExistingPath(commonDirectory);
        if (isPathWithin(canonicalCommon, canonicalCandidate)) {
          candidates.push(canonicalCandidate);
        }
      } catch {
        // Ignore malformed or unavailable Steam libraries.
      }
    }
  });

  return uniquePaths(candidates);
}

function configuredKitCandidates(): DetectionCandidate[] {
  const candidates: DetectionCandidate[] = [];
  HALO_EDITING_KIT_IDS.forEach(kitId => {
    const configuredValue = getPathSetting(kitId);
    if (!configuredValue || !path.isAbsolute(configuredValue)) {
      return;
    }
    const kitRoot = canonicalKitRoot(configuredValue);
    if (kitRoot) {
      const configuredGame = HALO_EDITING_KITS[kitId];
      const recognizedGame = gameForDefaultInstallDirectory(kitRoot);
      const candidateKitId = recognizedGame?.languageId === configuredGame.languageId
        ? recognizedGame.kitId
        : kitId;
      candidates.push({kitId: candidateKitId, kitRoot, approvedForExecution: true});
    }
  });
  return candidates;
}

function getSteamKitCandidates(): Promise<DetectionCandidate[]> {
  if (!steamKitCandidatesPromise) {
    steamKitCandidatesPromise = Promise.all(
      HALO_EDITING_KIT_IDS.map(async kitId => {
        const game = HALO_EDITING_KITS[kitId];
        const roots = await findSteamKitRoots(game);
        return roots.map(kitRoot => ({kitId, kitRoot, approvedForExecution: true}));
      })
    ).then(candidateGroups => candidateGroups.reduce<DetectionCandidate[]>(
      (allCandidates, candidates) => allCandidates.concat(candidates),
      []
    ));
  }
  return steamKitCandidatesPromise;
}

function invalidateKitDetectionCache(): void {
  kitDetectionGeneration++;
  steamLibrariesPromise = undefined;
  steamKitCandidatesPromise = undefined;
  languageDetectionPromises.clear();
}

async function detectGameAndContainingKit(scriptPath: string): Promise<DetectedKit | undefined> {
  let canonicalScriptPath: string;
  try {
    canonicalScriptPath = canonicalExistingPath(scriptPath);
    if (!fs.statSync(canonicalScriptPath).isFile()) {
      return undefined;
    }
  } catch {
    return undefined;
  }

  const candidates = configuredKitCandidates();
  const adjacentRoot = findAdjacentKitRoot(scriptPath);
  const adjacentGame = adjacentRoot ? gameForDefaultInstallDirectory(adjacentRoot) : undefined;
  if (adjacentRoot && adjacentGame) {
    candidates.push({
      kitId: adjacentGame.kitId,
      kitRoot: adjacentRoot,
      approvedForExecution: false
    });
  }

  const selectCandidate = (): KitGameCandidate | undefined => {
    const validCandidates = candidates.filter(candidate =>
      isCanonicalScriptPathInKit(scriptPath, candidate.kitRoot)
    );
    return chooseContainingKitGame(scriptPath, validCandidates);
  };

  let selected = selectCandidate();
  if (!selected && compilerConfiguration().get<boolean>('autoDetectEditingKits', true)) {
    candidates.push(...await getSteamKitCandidates());
    selected = selectCandidate();
  }

  if (!selected) {
    return undefined;
  }

  return {
    game: HALO_EDITING_KITS[selected.kitId],
    kitRoot: selected.kitRoot,
    approvedForExecution: candidates.some(candidate =>
      candidate.approvedForExecution &&
      candidate.kitId === selected.kitId &&
      samePath(candidate.kitRoot, selected.kitRoot)
    )
  };
}

function canDetectDocumentKit(document: vscode.TextDocument): boolean {
  return process.platform === 'win32' &&
    vscode.env.remoteName === undefined &&
    document.uri.scheme === 'file' &&
    !document.isUntitled &&
    path.extname(document.uri.fsPath).toLowerCase() === '.hsc';
}

function detectAndApplyDocumentLanguage(document: vscode.TextDocument): Promise<LanguageDetectionResult> {
  if (!canDetectDocumentKit(document)) {
    return Promise.resolve({document});
  }

  const documentKey = document.uri.toString();
  const existingDetection = languageDetectionPromises.get(documentKey);
  if (existingDetection?.document === document) {
    return existingDetection.promise;
  }

  const detectionGeneration = kitDetectionGeneration;
  const detectionPromise = (async (): Promise<LanguageDetectionResult> => {
    const detectedKit = await detectGameAndContainingKit(document.uri.fsPath);
    if (!detectedKit || detectionGeneration !== kitDetectionGeneration) {
      return {document};
    }

    let resolvedDocument = document;
    if (
      compilerConfiguration().get<boolean>('autoDetectScriptLanguage', true) &&
      !document.isClosed &&
      document.languageId !== detectedKit.game.languageId
    ) {
      try {
        resolvedDocument = await vscode.languages.setTextDocumentLanguage(
          document,
          detectedKit.game.languageId
        );
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        outputChannel?.appendLine(`Could not switch ${document.uri.fsPath} to ${detectedKit.game.label}: ${message}`);
      }
    }
    return {document: resolvedDocument, detectedKit};
  })().catch(error => {
    const message = error instanceof Error ? error.message : String(error);
    outputChannel?.appendLine(`Editing Kit language detection failed for ${document.uri.fsPath}: ${message}`);
    return {document};
  });

  languageDetectionPromises.set(documentKey, {document, promise: detectionPromise});
  detectionPromise.then(
    () => {
      if (languageDetectionPromises.get(documentKey)?.promise === detectionPromise) {
        languageDetectionPromises.delete(documentKey);
      }
    },
    () => {
      if (languageDetectionPromises.get(documentKey)?.promise === detectionPromise) {
        languageDetectionPromises.delete(documentKey);
      }
    }
  );
  return detectionPromise;
}

async function rememberKitRoot(kitId: string, kitRoot: string): Promise<void> {
  const configuration = compilerConfiguration();
  const configuredPaths = configuration.get<{[kitId: string]: string}>('editingKitPaths', {});
  await configuration.update(
    'editingKitPaths',
    {...configuredPaths, [kitId]: kitRoot},
    vscode.ConfigurationTarget.Global
  );
}

async function chooseKitRoot(game: HaloGameConfig, candidates: string[]): Promise<string | undefined> {
  const items: KitQuickPickItem[] = candidates.map(kitRoot => ({
    label: path.basename(kitRoot),
    description: kitRoot,
    kitRoot
  }));
  const selected = await vscode.window.showQuickPick(items, {
    placeHolder: `Select the ${game.label} Editing Kit to use`
  });
  return selected ? selected.kitRoot : undefined;
}

async function browseForKitRoot(game: HaloGameConfig, scriptPath: string): Promise<string | undefined> {
  const selected = await vscode.window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
    defaultUri: vscode.Uri.file(path.dirname(scriptPath)),
    openLabel: `Use ${game.label} Editing Kit folder`,
    title: `Select the folder that contains ${game.defaultInstallDirectory}'s tool.exe`
  });
  if (!selected || selected.length === 0) {
    return undefined;
  }

  const kitRoot = normalizeKitRoot(selected[0].fsPath);
  const canonicalRoot = canonicalKitRoot(kitRoot);
  if (!canonicalRoot) {
    vscode.window.showErrorMessage(`No tool.exe was found directly inside "${kitRoot}".`);
    return undefined;
  }

  const recognizedGame = gameForDefaultInstallDirectory(canonicalRoot);
  const gameToRemember = recognizedGame?.languageId === game.languageId ? recognizedGame : game;
  await rememberKitRoot(gameToRemember.kitId, canonicalRoot);
  return canonicalRoot;
}

async function resolveKitRoot(game: HaloGameConfig, scriptPath: string): Promise<string | undefined> {
  const adjacentRoot = findAdjacentKitRoot(scriptPath);
  const adjacentGame = adjacentRoot ? gameForDefaultInstallDirectory(adjacentRoot) : undefined;
  if (adjacentGame && adjacentGame.languageId !== game.languageId) {
    throw new Error(
      `This script is saved under ${adjacentGame.defaultInstallDirectory}, but its selected language is ${game.label}.`
    );
  }

  const configuredValue = getPathSetting(game.kitId);
  if (configuredValue && !path.isAbsolute(configuredValue)) {
    outputChannel?.appendLine(`Configured Editing Kit path must be absolute: ${configuredValue}`);
  }
  const configuredRoot = configuredValue && path.isAbsolute(configuredValue)
    ? canonicalKitRoot(configuredValue)
    : undefined;
  if (configuredRoot && isCanonicalScriptPathInKit(scriptPath, configuredRoot)) {
    return configuredRoot;
  }

  const autoDetect = compilerConfiguration().get<boolean>('autoDetectEditingKits', true);
  const steamRoots = autoDetect ? await findSteamKitRoots(game) : [];
  const containingSteamRoot = steamRoots.find(candidate =>
    isCanonicalScriptPathInKit(scriptPath, candidate)
  );
  if (containingSteamRoot) {
    return containingSteamRoot;
  }

  if (adjacentRoot) {
    const approved = await vscode.window.showWarningMessage(
      `HaloScript found an Editing Kit beside this script:\n${adjacentRoot}\n\nRun its tool.exe and remember this location?`,
      {modal: true},
      'Use and Remember'
    );
    if (approved === 'Use and Remember') {
      const gameToRemember = adjacentGame?.languageId === game.languageId ? adjacentGame : game;
      await rememberKitRoot(gameToRemember.kitId, adjacentRoot);
      return adjacentRoot;
    }
    return undefined;
  }

  if (configuredRoot) {
    return configuredRoot;
  }
  if (configuredValue) {
    outputChannel?.appendLine(`Configured Editing Kit is unavailable: ${configuredValue}`);
  }

  if (steamRoots.length === 1) {
    return steamRoots[0];
  }
  if (steamRoots.length > 1) {
    const selectedRoot = await chooseKitRoot(game, steamRoots);
    if (selectedRoot) {
      await rememberKitRoot(game.kitId, selectedRoot);
    }
    return selectedRoot;
  }

  return browseForKitRoot(game, scriptPath);
}

function scenarioAssociationKey(
  game: HaloGameConfig,
  kitRoot: string,
  scriptPath: string,
  discovery: ScenarioDiscovery
): string {
  const identity = [
    game.kitId,
    path.resolve(kitRoot),
    path.resolve(discovery.scriptsDirectory || scriptPath)
  ].join('|').toLowerCase();
  let hash = 2166136261;
  for (let index = 0; index < identity.length; index++) {
    hash ^= identity.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `atlas.compiler.scenario.${(hash >>> 0).toString(16)}`;
}

async function browseForScenario(
  game: HaloGameConfig,
  kitRoot: string,
  discovery: ScenarioDiscovery
): Promise<string | undefined> {
  const defaultDirectory = fs.existsSync(discovery.scenarioDirectory)
    ? discovery.scenarioDirectory
    : (fs.existsSync(discovery.tagRoot) ? discovery.tagRoot : kitRoot);
  const selected = await vscode.window.showOpenDialog({
    canSelectFiles: true,
    canSelectFolders: false,
    canSelectMany: false,
    defaultUri: vscode.Uri.file(defaultDirectory),
    filters: {'Halo scenario': ['scenario']},
    openLabel: 'Compile this scenario',
    title: `Select the ${game.label} scenario that uses this script`
  });
  return selected && selected.length > 0 ? selected[0].fsPath : undefined;
}

async function resolveScenario(
  context: vscode.ExtensionContext,
  game: HaloGameConfig,
  kitRoot: string,
  scriptPath: string,
  discovery: ScenarioDiscovery,
  forceSelection: boolean
): Promise<string | undefined> {
  const associationKey = scenarioAssociationKey(game, kitRoot, scriptPath, discovery);
  const validCandidates = discovery.candidates.filter(candidate =>
    isPathWithin(kitRoot, candidate) && isPathWithin(discovery.tagRoot, candidate)
  );
  const canRememberSelection = discovery.scriptsDirectory !== undefined && validCandidates.length > 0;
  const rememberedScenario = canRememberSelection
    ? context.workspaceState.get<string>(associationKey)
    : undefined;
  if (
    !forceSelection &&
    rememberedScenario &&
    fs.existsSync(rememberedScenario) &&
    path.extname(rememberedScenario).toLowerCase() === '.scenario' &&
    isPathWithin(kitRoot, rememberedScenario) &&
    isPathWithin(discovery.tagRoot, rememberedScenario)
  ) {
    return rememberedScenario;
  }

  const preferredScenario = choosePreferredScenario(validCandidates, discovery.scenarioDirectory, scriptPath);
  if (!forceSelection && preferredScenario) {
    return preferredScenario;
  }

  let selectedScenario: string | undefined;
  if (validCandidates.length > 0) {
    const items: ScenarioQuickPickItem[] = validCandidates.map(scenarioPath => ({
      label: path.basename(scenarioPath),
      description: path.relative(discovery.tagRoot, scenarioPath),
      scenarioPath
    }));
    items.push({
      label: '$(folder-opened) Browse for another scenario...',
      description: 'Choose a .scenario elsewhere in this Editing Kit',
      browse: true
    });
    const selected = await vscode.window.showQuickPick(items, {
      placeHolder: 'More than one scenario is beside this script. Select the target scenario.'
    });
    selectedScenario = selected && selected.browse
      ? await browseForScenario(game, kitRoot, discovery)
      : selected?.scenarioPath;
  } else {
    selectedScenario = await browseForScenario(game, kitRoot, discovery);
  }

  if (!selectedScenario) {
    return undefined;
  }
  if (
    path.extname(selectedScenario).toLowerCase() !== '.scenario' ||
    !isPathWithin(kitRoot, selectedScenario) ||
    !isPathWithin(discovery.tagRoot, selectedScenario)
  ) {
    throw new Error('The selected file must be a .scenario inside the active Editing Kit tags directory.');
  }

  if (canRememberSelection) {
    await context.workspaceState.update(associationKey, selectedScenario);
  }
  return selectedScenario;
}

function verifyCompilePaths(
  kitRoot: string,
  scenarioPath: string
): {kitRoot: string; scenarioPath: string; toolExecutable: string} {
  const verifiedKitRoot = canonicalKitRoot(kitRoot);
  if (!verifiedKitRoot) {
    throw new Error('The selected Editing Kit or its tool.exe is no longer available.');
  }

  let verifiedScenarioPath: string;
  try {
    verifiedScenarioPath = canonicalExistingPathWithin(verifiedKitRoot, scenarioPath);
  } catch {
    throw new Error('The selected scenario is unavailable or resolves outside the Editing Kit.');
  }
  if (
    !fs.statSync(verifiedScenarioPath).isFile() ||
    path.extname(verifiedScenarioPath).toLowerCase() !== '.scenario' ||
    !isPathWithin(verifiedKitRoot, verifiedScenarioPath)
  ) {
    throw new Error('The selected scenario must resolve to a .scenario file inside the Editing Kit.');
  }

  const toolExecutable = canonicalExistingPath(path.join(verifiedKitRoot, 'tool.exe'));
  if (
    !isPathWithin(verifiedKitRoot, toolExecutable) ||
    !samePath(path.dirname(toolExecutable), verifiedKitRoot)
  ) {
    throw new Error('tool.exe resolves outside the selected Editing Kit.');
  }

  // This also verifies that the canonical scenario is below a top-level tags directory.
  createScenarioArgument(verifiedScenarioPath, verifiedKitRoot);
  return {
    kitRoot: verifiedKitRoot,
    scenarioPath: verifiedScenarioPath,
    toolExecutable
  };
}

async function saveScriptDocuments(activeDocument: vscode.TextDocument, scriptsDirectory?: string): Promise<number> {
  const saveBeforeCompile = compilerConfiguration().get<boolean>('saveBeforeCompile', true);
  const dirtyDocuments = vscode.workspace.textDocuments.filter(document => {
    if (!document.isDirty || document.uri.scheme !== 'file' || path.extname(document.uri.fsPath).toLowerCase() !== '.hsc') {
      return false;
    }
    return document === activeDocument ||
      (scriptsDirectory !== undefined && isPathWithin(scriptsDirectory, document.uri.fsPath));
  });

  if (!saveBeforeCompile) {
    return dirtyDocuments.length;
  }

  for (const document of dirtyDocuments) {
    if (!await document.save()) {
      throw new Error(`Could not save "${document.uri.fsPath}". Compilation was aborted.`);
    }
  }
  return 0;
}

function formatCommand(executable: string, args: string[]): string {
  return [executable, ...args]
    .map(argument => /[\s"&|<>^]/.test(argument) ? `"${argument.replace(/"/g, '\\"')}"` : argument)
    .join(' ');
}

function appendCapturedOutput(current: string, addition: string): string {
  const combined = current + addition;
  return combined.length <= MAX_CAPTURE_LENGTH
    ? combined
    : combined.substring(combined.length - MAX_CAPTURE_LENGTH);
}

function runTool(
  executable: string,
  args: string[],
  kitRoot: string,
  game: HaloGameConfig
): Thenable<ToolResult> {
  return vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      cancellable: false,
      title: `Compiling ${game.label} scenario scripts`
    },
    () => new Promise<ToolResult>(resolve => {
      let output = '';
      let markerWindow = '';
      let fatalOutput = false;
      let settled = false;
      let child: childProcess.ChildProcessWithoutNullStreams;

      const finish = (result: ToolResult) => {
        if (settled) {
          return;
        }
        settled = true;
        if (runningProcess === child) {
          runningProcess = undefined;
        }
        resolve(result);
      };

      try {
        child = childProcess.spawn(executable, args, {
          cwd: kitRoot,
          shell: false,
          windowsHide: true
        });
        runningProcess = child;
      } catch (error) {
        finish({
          code: null,
          signal: null,
          output,
          fatalOutput,
          spawnError: error instanceof Error ? error : new Error(String(error))
        });
        return;
      }

      child.stdout.setEncoding('utf8');
      child.stderr.setEncoding('utf8');
      child.stdout.on('data', (data: string) => {
        outputChannel?.append(data);
        output = appendCapturedOutput(output, data);
        markerWindow = appendCapturedOutput(markerWindow, data).slice(-4096);
        fatalOutput = fatalOutput || containsFatalToolOutput(markerWindow);
      });
      child.stderr.on('data', (data: string) => {
        outputChannel?.append(data);
        output = appendCapturedOutput(output, data);
        markerWindow = appendCapturedOutput(markerWindow, data).slice(-4096);
        fatalOutput = fatalOutput || containsFatalToolOutput(markerWindow);
      });
      child.on('error', error => finish({
        code: null,
        signal: null,
        output,
        fatalOutput,
        spawnError: error
      }));
      child.on('close', (code, signal) => finish({
        code,
        signal,
        output,
        fatalOutput
      }));
    })
  );
}

async function compileActiveScript(context: vscode.ExtensionContext, forceScenarioSelection: boolean): Promise<void> {
  if (process.platform !== 'win32' || vscode.env.remoteName !== undefined) {
    vscode.window.showErrorMessage('Halo Editing Kit compilation requires a local Windows extension host.');
    return;
  }
  if (!vscode.workspace.isTrusted) {
    const selected = await vscode.window.showWarningMessage(
      'Compiling HaloScript runs tool.exe and is disabled in Restricted Mode.',
      'Manage Workspace Trust'
    );
    if (selected === 'Manage Workspace Trust') {
      await vscode.commands.executeCommand('workbench.trust.manage');
    }
    return;
  }

  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage('Open a saved HaloScript file before compiling.');
    return;
  }
  let document = editor.document;
  if (document.uri.scheme !== 'file' || document.isUntitled || path.extname(document.uri.fsPath).toLowerCase() !== '.hsc') {
    vscode.window.showErrorMessage('Compilation requires a saved local .hsc file.');
    return;
  }

  const languageDetection = await detectAndApplyDocumentLanguage(document);
  document = languageDetection.document;
  const game = selectHaloGame(document.languageId, languageDetection.detectedKit?.game.kitId);
  if (!game) {
    vscode.window.showErrorMessage('The active editor is not using a HaloScript language mode.');
    return;
  }

  const commandTemplate = game.defaultToolArguments;
  if (!commandTemplate) {
    vscode.window.showInformationMessage(
      `${game.label} does not support standalone scenario-script compilation.`
    );
    return;
  }
  if (!commandTemplate.some(argument => argument.indexOf('${scenario}') >= 0)) {
    throw new Error(`The ${game.label} Tool command is missing its \${scenario} argument.`);
  }

  const scriptPath = document.uri.fsPath;
  const kitRoot = languageDetection.detectedKit?.approvedForExecution
    ? languageDetection.detectedKit.kitRoot
    : await resolveKitRoot(game, scriptPath);
  if (!kitRoot) {
    return;
  }
  if (isPathWithin(kitRoot, scriptPath) && !isCanonicalScriptPathInKit(scriptPath, kitRoot)) {
    throw new Error(
      'The script must use the Editing Kit’s canonical data or tags path without a redirected directory link.'
    );
  }
  const discovery = discoverScenarios(scriptPath, kitRoot);
  if (discovery.error) {
    throw new Error(discovery.error);
  }
  const scenarioPath = await resolveScenario(
    context,
    game,
    kitRoot,
    scriptPath,
    discovery,
    forceScenarioSelection
  );
  if (!scenarioPath) {
    return;
  }
  const unsavedDocumentCount = await saveScriptDocuments(document, discovery.scriptsDirectory);

  const verifiedPaths = verifyCompilePaths(kitRoot, scenarioPath);
  const scenarioArgument = createScenarioArgument(verifiedPaths.scenarioPath, verifiedPaths.kitRoot);
  const args = expandToolArguments(commandTemplate, {
    scenario: scenarioArgument,
    script: scriptPath,
    kitRoot: verifiedPaths.kitRoot
  });

  outputChannel?.clear();
  outputChannel?.appendLine(`[${new Date().toLocaleString()}] ${game.label} script compilation`);
  outputChannel?.appendLine(`Script:   ${scriptPath}`);
  outputChannel?.appendLine(`Scenario: ${verifiedPaths.scenarioPath}`);
  outputChannel?.appendLine(`Kit:      ${verifiedPaths.kitRoot}`);
  outputChannel?.appendLine(`Command:  ${formatCommand(verifiedPaths.toolExecutable, args)}`);
  if (unsavedDocumentCount > 0) {
    outputChannel?.appendLine(
      `Warning: ${unsavedDocumentCount} dirty HaloScript document(s) were not saved; Tool will compile on-disk versions.`
    );
  }
  outputChannel?.appendLine('');
  outputChannel?.show(true);
  if (statusBarItem) {
    statusBarItem.text = '$(sync~spin) Compiling HaloScript';
  }

  const result = await runTool(verifiedPaths.toolExecutable, args, verifiedPaths.kitRoot, game);
  outputChannel?.appendLine('');
  if (result.spawnError) {
    outputChannel?.appendLine(`Failed to start Tool: ${result.spawnError.message}`);
    vscode.window.showErrorMessage(`Could not start tool.exe: ${result.spawnError.message}`);
    return;
  }

  const failed = result.code !== 0 || result.fatalOutput || containsFatalToolOutput(result.output);
  outputChannel?.appendLine(
    result.signal ? `Tool stopped with signal ${result.signal}.` : `Tool exited with code ${String(result.code)}.`
  );
  if (failed) {
    outputChannel?.show();
    vscode.window.showErrorMessage('HaloScript compilation failed. See the HaloScript Compiler output.');
  } else {
    vscode.window.showInformationMessage(`Compiled scripts for ${path.basename(verifiedPaths.scenarioPath)}.`);
  }
}

function updateStatusBar(gameOverride?: HaloGameConfig, detecting = false): void {
  if (!statusBarItem) {
    setCompileCommandEnabled(false);
    return;
  }

  const editor = vscode.window.activeTextEditor;
  if (
    !editor ||
    process.platform !== 'win32' ||
    vscode.env.remoteName !== undefined ||
    editor.document.uri.scheme !== 'file' ||
    path.extname(editor.document.uri.fsPath).toLowerCase() !== '.hsc'
  ) {
    setCompileCommandEnabled(false);
    statusBarItem.hide();
    return;
  }

  if (compilationInProgress) {
    setCompileCommandEnabled(false);
    statusBarItem.text = '$(sync~spin) Compiling HaloScript';
    statusBarItem.tooltip = 'A HaloScript compilation is in progress';
    statusBarItem.command = undefined;
    statusBarItem.color = new vscode.ThemeColor('disabledForeground');
  } else if (detecting) {
    setCompileCommandEnabled(false);
    statusBarItem.text = '$(sync~spin) Detecting Halo game';
    statusBarItem.tooltip = 'Detecting the Halo Editing Kit for this script…';
    statusBarItem.command = undefined;
    statusBarItem.color = new vscode.ThemeColor('disabledForeground');
  } else {
    const game = gameOverride || selectHaloGame(editor.document.languageId);
    if (!game || !supportsScenarioCompilation(game)) {
      setCompileCommandEnabled(false);
      statusBarItem.text = '$(circle-slash) Compile unavailable';
      statusBarItem.tooltip = game
        ? `${game.label} does not support standalone scenario-script compilation`
        : 'Select a supported HaloScript language before compiling';
      statusBarItem.command = undefined;
      statusBarItem.color = new vscode.ThemeColor('disabledForeground');
    } else if (!vscode.workspace.isTrusted) {
      setCompileCommandEnabled(true);
      statusBarItem.text = '$(lock) Compile HaloScript';
      statusBarItem.tooltip = 'Trust this workspace to run Halo Editing Kit Tool';
      statusBarItem.command = COMMAND_ID;
      statusBarItem.color = undefined;
    } else {
      setCompileCommandEnabled(true);
      statusBarItem.text = '$(tools) Compile HaloScript';
      statusBarItem.tooltip = compileStatusTooltip(game);
      statusBarItem.command = COMMAND_ID;
      statusBarItem.color = undefined;
    }
  }
  statusBarItem.show();
}

async function refreshActiveEditorStatus(): Promise<void> {
  const refreshGeneration = ++statusRefreshGeneration;
  const editor = vscode.window.activeTextEditor;
  if (!editor || !canDetectDocumentKit(editor.document)) {
    updateStatusBar();
    return;
  }

  const documentKey = editor.document.uri.toString();
  updateStatusBar(undefined, true);
  const result = await detectAndApplyDocumentLanguage(editor.document);
  const activeEditor = vscode.window.activeTextEditor;
  if (
    refreshGeneration !== statusRefreshGeneration ||
    !activeEditor ||
    activeEditor.document.uri.toString() !== documentKey
  ) {
    return;
  }

  const game = selectHaloGame(
    activeEditor.document.languageId,
    result.detectedKit?.game.kitId
  );
  updateStatusBar(game);
}

function detectLanguageAfterDocumentEvent(document: vscode.TextDocument): void {
  const documentKey = document.uri.toString();
  void detectAndApplyDocumentLanguage(document).then(() => {
    // setTextDocumentLanguage emits onDidOpenTextDocument before VS Code updates
    // activeTextEditor, so refresh on the next turn of the extension host.
    setTimeout(() => {
      const activeEditor = vscode.window.activeTextEditor;
      if (activeEditor?.document.uri.toString() === documentKey) {
        void refreshActiveEditorStatus();
      }
    }, 0);
  });
}

export function activate(context: vscode.ExtensionContext): void {
  const compilerOutput = vscode.window.createOutputChannel(OUTPUT_NAME);
  const compilerStatus = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  outputChannel = compilerOutput;
  statusBarItem = compilerStatus;
  compilerStatus.name = 'Compile HaloScript';
  setCompileCommandEnabled(false);

  const runCompileCommand = async (forceScenarioSelection: boolean) => {
    if (compilationInProgress) {
      vscode.window.showWarningMessage('A HaloScript compilation is already in progress.');
      return;
    }
    compilationInProgress = true;
    updateStatusBar();
    try {
      await compileActiveScript(context, forceScenarioSelection);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      outputChannel?.appendLine(`Error: ${message}`);
      outputChannel?.show();
      vscode.window.showErrorMessage(`HaloScript compiler: ${message}`);
    } finally {
      compilationInProgress = false;
      void refreshActiveEditorStatus();
    }
  };

  context.subscriptions.push(
    compilerOutput,
    compilerStatus,
    vscode.commands.registerCommand(COMMAND_ID, () => runCompileCommand(false)),
    vscode.commands.registerCommand(CHOOSE_SCENARIO_COMMAND_ID, () => runCompileCommand(true)),
    vscode.window.onDidChangeActiveTextEditor(() => {
      void refreshActiveEditorStatus();
    }),
    vscode.workspace.onDidOpenTextDocument(document => {
      detectLanguageAfterDocumentEvent(document);
    }),
    vscode.workspace.onDidSaveTextDocument(document => {
      detectLanguageAfterDocumentEvent(document);
    }),
    vscode.workspace.onDidChangeConfiguration(event => {
      if (event.affectsConfiguration(CONFIGURATION_SECTION)) {
        if (
          event.affectsConfiguration(`${CONFIGURATION_SECTION}.autoDetectScriptLanguage`) ||
          event.affectsConfiguration(`${CONFIGURATION_SECTION}.autoDetectEditingKits`) ||
          event.affectsConfiguration(`${CONFIGURATION_SECTION}.editingKitPaths`)
        ) {
          invalidateKitDetectionCache();
          vscode.workspace.textDocuments.forEach(document => {
            void detectAndApplyDocumentLanguage(document);
          });
        }
        void refreshActiveEditorStatus();
      }
    }),
    vscode.workspace.onDidGrantWorkspaceTrust(() => {
      void refreshActiveEditorStatus();
    })
  );
  vscode.workspace.textDocuments.forEach(document => {
    void detectAndApplyDocumentLanguage(document);
  });
  void refreshActiveEditorStatus();
}

export function deactivate(): void {
  // Tool writes scenario tags. Do not force-terminate it during extension
  // deactivation; allowing the process to finish is safer than a partial write.
  runningProcess = undefined;
  compilationInProgress = false;
  setCompileCommandEnabled(false);
  invalidateKitDetectionCache();
  statusRefreshGeneration++;
  outputChannel = undefined;
  statusBarItem = undefined;
}

export {CHOOSE_SCENARIO_COMMAND_ID, COMMAND_ID, HALOSCRIPT_LANGUAGE_IDS};
