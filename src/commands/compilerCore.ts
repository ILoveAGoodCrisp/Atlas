import * as fs from 'fs';
import * as path from 'path';

export interface HaloGameConfig {
  kitId: string;
  languageId: string;
  label: string;
  steamAppId: string;
  defaultInstallDirectory: string;
  defaultToolArguments?: string[];
}

export interface ScenarioDiscovery {
  scriptsDirectory?: string;
  scenarioDirectory: string;
  tagRoot: string;
  candidates: string[];
  error?: string;
}

export interface KitGameCandidate {
  kitId: string;
  kitRoot: string;
}

export const HALO_EDITING_KITS: {[kitId: string]: HaloGameConfig} = {
  hsc1: {
    kitId: 'hsc1',
    languageId: 'hsc1',
    label: 'Halo 1',
    steamAppId: '1532190',
    defaultInstallDirectory: 'HCEEK'
  },
  hsc2: {
    kitId: 'hsc2',
    languageId: 'hsc2',
    label: 'Halo 2',
    steamAppId: '1613450',
    defaultInstallDirectory: 'H2EK',
    defaultToolArguments: ['rebuild-scenario-scripts', '${scenario}']
  },
  hsc3: {
    kitId: 'hsc3',
    languageId: 'hsc3',
    label: 'Halo 3',
    steamAppId: '1695791',
    defaultInstallDirectory: 'H3EK'
  },
  hsco: {
    kitId: 'hsco',
    languageId: 'hsco',
    label: 'Halo 3: ODST',
    steamAppId: '1695794',
    defaultInstallDirectory: 'H3ODSTEK'
  },
  hscr: {
    kitId: 'hscr',
    languageId: 'hscr',
    label: 'Halo: Reach',
    steamAppId: '1695793',
    defaultInstallDirectory: 'HREK'
  },
  hsc4: {
    kitId: 'hsc4',
    languageId: 'hsc4',
    label: 'Halo 4',
    steamAppId: '1695792',
    defaultInstallDirectory: 'H4EK',
    defaultToolArguments: ['compile-scripts', '${scenario}']
  },
  h2amp: {
    kitId: 'h2amp',
    languageId: 'hsc4',
    label: 'Halo 2 Anniversary MP',
    steamAppId: '1695790',
    defaultInstallDirectory: 'H2AMPEK',
    defaultToolArguments: ['compile-scripts', '${scenario}']
  }
};

export const HALO_GAMES: {[languageId: string]: HaloGameConfig} = {
  hsc1: HALO_EDITING_KITS.hsc1,
  hsc2: HALO_EDITING_KITS.hsc2,
  hsc3: HALO_EDITING_KITS.hsc3,
  hsco: HALO_EDITING_KITS.hsco,
  hscr: HALO_EDITING_KITS.hscr,
  hsc4: HALO_EDITING_KITS.hsc4
};

export const HALO_EDITING_KIT_IDS = Object.keys(HALO_EDITING_KITS);
export const HALOSCRIPT_LANGUAGE_IDS = Object.keys(HALO_GAMES);

function comparablePath(value: string): string {
  const resolved = path.resolve(value);
  return process.platform === 'win32' ? resolved.toLowerCase() : resolved;
}

export function isPathWithin(parentPath: string, childPath: string): boolean {
  const parent = comparablePath(parentPath);
  const child = comparablePath(childPath);
  const relative = path.relative(parent, child);
  return relative === '' || (!relative.startsWith('..' + path.sep) && relative !== '..' && !path.isAbsolute(relative));
}

export function canonicalExistingPath(value: string): string {
  return fs.realpathSync.native ? fs.realpathSync.native(value) : fs.realpathSync(value);
}

export function canonicalExistingPathWithin(parentPath: string, childPath: string): string {
  const canonicalParent = canonicalExistingPath(parentPath);
  const canonicalChild = canonicalExistingPath(childPath);
  if (!isPathWithin(canonicalParent, canonicalChild)) {
    throw new Error(`"${childPath}" resolves outside "${parentPath}".`);
  }
  return canonicalChild;
}

export function gameForDefaultInstallDirectory(directory: string): HaloGameConfig | undefined {
  const directoryName = path.basename(path.resolve(directory)).toLowerCase();
  return HALO_EDITING_KIT_IDS
    .map(kitId => HALO_EDITING_KITS[kitId])
    .find(game => game.defaultInstallDirectory.toLowerCase() === directoryName);
}

export function isCanonicalScriptPathInKit(scriptPath: string, kitRoot: string): boolean {
  try {
    const resolvedRoot = path.resolve(kitRoot);
    const resolvedScript = path.resolve(scriptPath);
    const canonicalRoot = canonicalExistingPath(kitRoot);
    const canonicalScript = canonicalExistingPath(scriptPath);
    if (
      !fs.statSync(canonicalRoot).isDirectory() ||
      !fs.statSync(canonicalScript).isFile() ||
      path.extname(canonicalScript).toLowerCase() !== '.hsc' ||
      !isPathWithin(resolvedRoot, resolvedScript) ||
      !isPathWithin(canonicalRoot, canonicalScript)
    ) {
      return false;
    }

    const visibleRelativePath = path.relative(resolvedRoot, resolvedScript);
    const canonicalRelativePath = path.relative(canonicalRoot, canonicalScript);
    const comparableVisiblePath = process.platform === 'win32'
      ? visibleRelativePath.toLowerCase()
      : visibleRelativePath;
    const comparableCanonicalPath = process.platform === 'win32'
      ? canonicalRelativePath.toLowerCase()
      : canonicalRelativePath;
    const firstSegment = canonicalRelativePath.split(path.sep)[0].toLowerCase();
    return (
      comparableVisiblePath === comparableCanonicalPath &&
      (firstSegment === 'data' || firstSegment === 'tags')
    );
  } catch {
    return false;
  }
}

export function chooseContainingKitGame(
  scriptPath: string,
  candidates: KitGameCandidate[]
): KitGameCandidate | undefined {
  const containingCandidates = candidates.filter(candidate =>
    HALO_EDITING_KITS[candidate.kitId] !== undefined &&
    isCanonicalScriptPathInKit(scriptPath, candidate.kitRoot)
  );
  if (containingCandidates.length === 0) {
    return undefined;
  }

  const deepestRootLength = Math.max(
    ...containingCandidates.map(candidate => path.resolve(candidate.kitRoot).length)
  );
  const deepestCandidates = containingCandidates.filter(
    candidate => path.resolve(candidate.kitRoot).length === deepestRootLength
  );
  const kitIds = new Set(deepestCandidates.map(candidate => candidate.kitId));
  return kitIds.size === 1 ? deepestCandidates[0] : undefined;
}

export function selectHaloGame(
  documentLanguageId: string,
  detectedKitId?: string
): HaloGameConfig | undefined {
  return (
    (detectedKitId ? HALO_EDITING_KITS[detectedKitId] : undefined) ||
    HALO_GAMES[documentLanguageId]
  );
}

export function supportsScenarioCompilation(game: HaloGameConfig): boolean {
  return game.defaultToolArguments !== undefined;
}

export function compileStatusTooltip(game: HaloGameConfig): string {
  return `Compile the ${game.label} scenario scripts`;
}

export function containsFatalToolOutput(output: string): boolean {
  return [
    /(?:^|\r?\n)\s*(?:###\s*)?error(?:\s|:)/i,
    /-\s*ERROR\s*-/i,
    /(?:^|\r?\n)\s*fatal(?:\s|:)/i,
    /unknown command/i,
    /(?:^|\r?\n)\s*usage:\s+/i,
    /\bfailed to (?:load|compile|open|create)\b/i
  ].some(pattern => pattern.test(output));
}

export function parseSteamLibraryFolders(contents: string): string[] {
  const results: string[] = [];
  const pathExpression = /"path"\s+"((?:\\.|[^"])*)"/g;
  let match: RegExpExecArray | null;

  while ((match = pathExpression.exec(contents)) !== null) {
    const libraryPath = match[1].replace(/\\\\/g, '\\');
    if (libraryPath && !results.some(existing => comparablePath(existing) === comparablePath(libraryPath))) {
      results.push(libraryPath);
    }
  }

  return results;
}

export function parseSteamInstallDirectory(contents: string): string | undefined {
  const match = /"installdir"\s+"([^"]+)"/i.exec(contents);
  return match ? match[1].replace(/\\\\/g, '\\') : undefined;
}

export function isSafeSteamInstallDirectory(value: string): boolean {
  return value.length > 0 && value !== '.' && value !== '..' && !/[\\/:]/.test(value);
}

function isDataRootName(name: string): boolean {
  return /^data(?:\s|$|\()/i.test(name);
}

function isTagRootName(name: string): boolean {
  return /^tags(?:\s|$|\()/i.test(name);
}

function findAncestor(startingDirectory: string, predicate: (name: string) => boolean): string | undefined {
  let currentDirectory = path.resolve(startingDirectory);

  while (true) {
    if (predicate(path.basename(currentDirectory))) {
      return currentDirectory;
    }

    const parentDirectory = path.dirname(currentDirectory);
    if (parentDirectory === currentDirectory) {
      return undefined;
    }
    currentDirectory = parentDirectory;
  }
}

function readScenarioFiles(directory: string): string[] {
  try {
    return fs.readdirSync(directory, {withFileTypes: true})
      .filter(entry => entry.isFile() && path.extname(entry.name).toLowerCase() === '.scenario')
      .map(entry => path.join(directory, entry.name))
      .sort((left, right) => left.localeCompare(right));
  } catch {
    return [];
  }
}

export function discoverScenarios(scriptPath: string, kitRoot: string): ScenarioDiscovery {
  const scriptDirectory = path.dirname(path.resolve(scriptPath));
  const scriptsDirectory = findAncestor(scriptDirectory, name => name.toLowerCase() === 'scripts');
  const sourceRoot = findAncestor(scriptDirectory, name => isDataRootName(name) || isTagRootName(name));
  const resolvedKitRoot = path.resolve(kitRoot);
  const defaultTagRoot = path.join(resolvedKitRoot, 'tags');

  if (sourceRoot) {
    const sourceRootName = path.basename(sourceRoot).toLowerCase();
    if (sourceRootName !== 'data' && sourceRootName !== 'tags') {
      return {
        scriptsDirectory,
        scenarioDirectory: defaultTagRoot,
        tagRoot: defaultTagRoot,
        candidates: [],
        error: `The source is under "${path.basename(sourceRoot)}". Stock Tool compilation requires canonical data and tags roots.`
      };
    }
  }

  if (scriptsDirectory && sourceRoot && isPathWithin(sourceRoot, scriptsDirectory)) {
    const sourceScenarioDirectory = path.dirname(scriptsDirectory);
    const relativeScenarioDirectory = path.relative(sourceRoot, sourceScenarioDirectory);
    const tagRoot = isTagRootName(path.basename(sourceRoot)) && isPathWithin(resolvedKitRoot, sourceRoot)
      ? sourceRoot
      : defaultTagRoot;
    const scenarioDirectory = path.resolve(tagRoot, relativeScenarioDirectory);

    if (isPathWithin(tagRoot, scenarioDirectory)) {
      return {
        scriptsDirectory,
        scenarioDirectory,
        tagRoot,
        candidates: readScenarioFiles(scenarioDirectory)
      };
    }
  }

  return {
    scriptsDirectory,
    scenarioDirectory: defaultTagRoot,
    tagRoot: defaultTagRoot,
    candidates: []
  };
}

function withoutExtension(filePath: string): string {
  return path.basename(filePath, path.extname(filePath)).toLowerCase();
}

export function choosePreferredScenario(
  candidates: string[],
  scenarioDirectory: string,
  _scriptPath: string
): string | undefined {
  if (candidates.length === 0) {
    return undefined;
  }
  if (candidates.length === 1) {
    return candidates[0];
  }

  const directoryName = path.basename(scenarioDirectory).toLowerCase();
  const directoryMatch = candidates.filter(candidate => withoutExtension(candidate) === directoryName);
  return directoryMatch.length === 1 ? directoryMatch[0] : undefined;
}

export function createScenarioArgument(scenarioPath: string, kitRoot: string): string {
  const resolvedScenarioPath = path.resolve(scenarioPath);
  const resolvedKitRoot = path.resolve(kitRoot);
  if (!isPathWithin(resolvedKitRoot, resolvedScenarioPath)) {
    throw new Error('The selected scenario is outside the Editing Kit.');
  }

  const relativeToKit = path.relative(resolvedKitRoot, resolvedScenarioPath);
  const firstSegment = relativeToKit.split(path.sep)[0];
  if (!firstSegment || firstSegment.toLowerCase() !== 'tags') {
    throw new Error('The selected scenario is not inside the Editing Kit\'s canonical tags directory.');
  }
  const tagRoot = path.join(resolvedKitRoot, firstSegment);

  const relativePath = path.relative(tagRoot, resolvedScenarioPath);
  if (relativePath === '..' || relativePath.startsWith('..' + path.sep) || path.isAbsolute(relativePath)) {
    throw new Error('The selected scenario cannot be represented as a local tag path.');
  }

  const extension = path.extname(relativePath);
  const withoutScenarioExtension = extension.toLowerCase() === '.scenario'
    ? relativePath.substring(0, relativePath.length - extension.length)
    : relativePath;
  return withoutScenarioExtension.split(path.sep).join('\\');
}

export interface CommandPlaceholders {
  scenario: string;
  script: string;
  kitRoot: string;
}

export function expandToolArguments(template: string[], placeholders: CommandPlaceholders): string[] {
  const replacements: {[name: string]: string} = {
    '${scenario}': placeholders.scenario,
    '${script}': placeholders.script,
    '${kitRoot}': placeholders.kitRoot
  };

  return template.map(argument => {
    let expanded = argument;
    Object.keys(replacements).forEach(token => {
      expanded = expanded.split(token).join(replacements[token]);
    });
    return expanded;
  });
}
