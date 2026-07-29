const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const extensionManifest = require('../package.json');

const {
  canonicalExistingPathWithin,
  chooseContainingKitGame,
  choosePreferredScenario,
  compileStatusTooltip,
  containsFatalToolOutput,
  createScenarioArgument,
  discoverScenarios,
  expandToolArguments,
  gameForDefaultInstallDirectory,
  HALO_EDITING_KIT_IDS,
  HALO_EDITING_KITS,
  HALO_GAMES,
  HALOSCRIPT_LANGUAGE_IDS,
  isCanonicalScriptPathInKit,
  isSafeSteamInstallDirectory,
  isPathWithin,
  parseSteamInstallDirectory,
  parseSteamLibraryFolders,
  selectHaloGame,
  supportsScenarioCompilation
} = require('../out/commands/compilerCore');

function createFixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'atlas-compiler-'));
  t.after(() => fs.rmSync(root, {recursive: true, force: true}));
  return root;
}

function touch(filePath) {
  fs.mkdirSync(path.dirname(filePath), {recursive: true});
  fs.writeFileSync(filePath, '');
}

test('mirrors a classic data scripts folder into tags', t => {
  const kitRoot = createFixture(t);
  const scriptPath = path.join(kitRoot, 'data', 'scenarios', 'multi', 'example', 'scripts', 'mission.hsc');
  const scenarioPath = path.join(kitRoot, 'tags', 'scenarios', 'multi', 'example', 'example.scenario');
  touch(scriptPath);
  touch(scenarioPath);

  const discovery = discoverScenarios(scriptPath, kitRoot);
  assert.equal(discovery.scenarioDirectory, path.dirname(scenarioPath));
  assert.deepEqual(discovery.candidates, [scenarioPath]);
  assert.equal(choosePreferredScenario(discovery.candidates, discovery.scenarioDirectory, scriptPath), scenarioPath);
  assert.equal(createScenarioArgument(scenarioPath, kitRoot), 'scenarios\\multi\\example\\example');
});

test('prefers the conventional directory-named scenario over a script-named scenario', t => {
  const kitRoot = createFixture(t);
  const scriptPath = path.join(kitRoot, 'tags', 'environments', 'solo', 'm90', 'scripts', 'audio.hsc');
  const mainScenario = path.join(kitRoot, 'tags', 'environments', 'solo', 'm90', 'm90.scenario');
  const audioScenario = path.join(kitRoot, 'tags', 'environments', 'solo', 'm90', 'audio.scenario');
  touch(scriptPath);
  touch(mainScenario);
  touch(audioScenario);

  const discovery = discoverScenarios(scriptPath, kitRoot);
  assert.equal(
    choosePreferredScenario(discovery.candidates, discovery.scenarioDirectory, scriptPath),
    mainScenario
  );
});

test('returns no automatic choice when multiple scenarios are genuinely ambiguous', t => {
  const kitRoot = createFixture(t);
  const scriptPath = path.join(kitRoot, 'data', 'levels', 'shared', 'scripts', 'alpha.hsc');
  const firstScenario = path.join(kitRoot, 'tags', 'levels', 'shared', 'alpha.scenario');
  const secondScenario = path.join(kitRoot, 'tags', 'levels', 'shared', 'bravo.scenario');
  touch(scriptPath);
  touch(firstScenario);
  touch(secondScenario);

  const discovery = discoverScenarios(scriptPath, kitRoot);
  assert.equal(choosePreferredScenario(discovery.candidates, discovery.scenarioDirectory, scriptPath), undefined);
});

test('handles case-insensitive source directory and scenario extensions', t => {
  const kitRoot = createFixture(t);
  const scriptPath = path.join(kitRoot, 'DATA', 'levels', 'sample', 'SCRIPTS', 'mission.hsc');
  const scenarioPath = path.join(kitRoot, 'tags', 'levels', 'sample', 'sample.SCENARIO');
  touch(scriptPath);
  touch(scenarioPath);

  const discovery = discoverScenarios(scriptPath, kitRoot);
  assert.deepEqual(discovery.candidates, [scenarioPath]);
  assert.equal(createScenarioArgument(scenarioPath, kitRoot), 'levels\\sample\\sample');
});

test('shared scripts without a scripts ancestor require manual scenario selection', t => {
  const kitRoot = createFixture(t);
  const scriptPath = path.join(kitRoot, 'data', 'globals', 'global_scripts.hsc');
  touch(scriptPath);

  const discovery = discoverScenarios(scriptPath, kitRoot);
  assert.equal(discovery.scriptsDirectory, undefined);
  assert.deepEqual(discovery.candidates, []);
  assert.equal(discovery.scenarioDirectory, path.join(kitRoot, 'tags'));
});

test('rejects scenarios under a noncanonical tag-root name', t => {
  const kitRoot = createFixture(t);
  const scenarioPath = path.join(kitRoot, 'tags (current)', 'levels', 'test', 'test.scenario');
  touch(scenarioPath);
  assert.throws(
    () => createScenarioArgument(scenarioPath, kitRoot),
    /canonical tags directory/
  );
});

test('rejects noncanonical source roots instead of falling back to unrelated tags', t => {
  const kitRoot = createFixture(t);
  const scriptPath = path.join(kitRoot, 'data (current)', 'levels', 'test', 'scripts', 'mission.hsc');
  const unrelatedScenario = path.join(kitRoot, 'tags', 'levels', 'test', 'test.scenario');
  touch(scriptPath);
  touch(unrelatedScenario);

  const discovery = discoverScenarios(scriptPath, kitRoot);
  assert.match(discovery.error, /canonical data and tags roots/);
  assert.deepEqual(discovery.candidates, []);
});

test('uses the outer kit tag root when a scenario path contains a nested tags folder', t => {
  const kitRoot = createFixture(t);
  const scenarioPath = path.join(kitRoot, 'tags', 'levels', 'tags', 'example.scenario');
  touch(scenarioPath);
  assert.equal(
    createScenarioArgument(scenarioPath, kitRoot),
    'levels\\tags\\example'
  );
});

test('rejects scenario paths outside the selected Editing Kit', t => {
  const kitRoot = createFixture(t);
  const otherRoot = createFixture(t);
  const scenarioPath = path.join(otherRoot, 'tags', 'levels', 'test.scenario');
  touch(scenarioPath);
  assert.throws(() => createScenarioArgument(scenarioPath, kitRoot), /outside the Editing Kit/);
});

test('parses Steam libraries and manifests', () => {
  const libraries = parseSteamLibraryFolders(`
    "0" { "path" "C:\\\\Program Files (x86)\\\\Steam" }
    "1" { "path" "D:\\\\Games" }
  `);
  assert.deepEqual(libraries, ['C:\\Program Files (x86)\\Steam', 'D:\\Games']);
  assert.equal(parseSteamInstallDirectory('"installdir" "H2EK"'), 'H2EK');
  assert.equal(isSafeSteamInstallDirectory('H2EK'), true);
  assert.equal(isSafeSteamInstallDirectory('..\\outside'), false);
  assert.equal(isSafeSteamInstallDirectory('C:\\outside'), false);
});

test('passes placeholder values as exact arguments', () => {
  const args = expandToolArguments(
    ['patched-command', '${scenario}', '--source=${script}', '${kitRoot}'],
    {
      scenario: 'levels\\space & symbols\\map',
      script: 'C:\\work\\mission & test.hsc',
      kitRoot: 'D:\\Games\\H2EK'
    }
  );
  assert.deepEqual(args, [
    'patched-command',
    'levels\\space & symbols\\map',
    '--source=C:\\work\\mission & test.hsc',
    'D:\\Games\\H2EK'
  ]);
});

test('uses only verified stock standalone compile commands', () => {
  assert.deepEqual(HALO_GAMES.hsc2.defaultToolArguments, ['rebuild-scenario-scripts', '${scenario}']);
  assert.deepEqual(HALO_GAMES.hsc4.defaultToolArguments, ['compile-scripts', '${scenario}']);
  assert.deepEqual(HALO_EDITING_KITS.h2amp.defaultToolArguments, ['compile-scripts', '${scenario}']);
  assert.equal(supportsScenarioCompilation(HALO_GAMES.hsc2), true);
  assert.equal(supportsScenarioCompilation(HALO_GAMES.hsc4), true);
  assert.equal(supportsScenarioCompilation(HALO_EDITING_KITS.h2amp), true);
  ['hsc1', 'hsc3', 'hsco', 'hscr'].forEach(kitId => {
    assert.equal(supportsScenarioCompilation(HALO_EDITING_KITS[kitId]), false);
  });
});

test('maps exact standard Editing Kit folder names to distinct kit profiles', () => {
  const expectedKits = {
    HCEEK: ['hsc1', 'hsc1'],
    H2EK: ['hsc2', 'hsc2'],
    H3EK: ['hsc3', 'hsc3'],
    H3ODSTEK: ['hsco', 'hsco'],
    HREK: ['hscr', 'hscr'],
    H4EK: ['hsc4', 'hsc4'],
    H2AMPEK: ['h2amp', 'hsc4']
  };
  Object.entries(expectedKits).forEach(([directory, [kitId, languageId]]) => {
    const exact = gameForDefaultInstallDirectory(path.join('C:\\kits', directory));
    const lowerCase = gameForDefaultInstallDirectory(path.join('C:\\kits', directory.toLowerCase()));
    assert.equal(exact?.kitId, kitId);
    assert.equal(exact?.languageId, languageId);
    assert.equal(lowerCase?.kitId, kitId);
  });
  assert.equal(gameForDefaultInstallDirectory(path.join('C:\\kits', 'H2EK-backup')), undefined);
  assert.equal(gameForDefaultInstallDirectory(path.join('C:\\kits', 'H4EK_old')), undefined);
  assert.equal(gameForDefaultInstallDirectory(path.join('C:\\kits', 'H2AMPEK-backup')), undefined);
  assert.equal(gameForDefaultInstallDirectory(path.join('C:\\kits', 'H2AMPEK_old')), undefined);
});

test('keeps H2AMPEK distinct from H4 while reusing the hsc4 language', () => {
  assert.equal(HALO_EDITING_KITS.h2amp.kitId, 'h2amp');
  assert.equal(HALO_EDITING_KITS.h2amp.languageId, 'hsc4');
  assert.equal(HALO_EDITING_KITS.h2amp.steamAppId, '1695790');
  assert.equal(HALO_EDITING_KITS.h2amp.defaultInstallDirectory, 'H2AMPEK');
  assert.notEqual(HALO_EDITING_KITS.h2amp.kitId, HALO_EDITING_KITS.hsc4.kitId);
  assert.deepEqual([...HALOSCRIPT_LANGUAGE_IDS].sort(), ['hsc1', 'hsc2', 'hsc3', 'hsc4', 'hsco', 'hscr']);
  assert.equal(HALO_EDITING_KIT_IDS.includes('h2amp'), true);
});

test('recognizes scripts only in a kit canonical data or tags root', t => {
  const kitRoot = createFixture(t);
  const dataScript = path.join(kitRoot, 'data', 'levels', 'test', 'scripts', 'mission.hsc');
  const tagScript = path.join(kitRoot, 'tags', 'levels', 'test', 'scripts', 'mission.hsc');
  const backupScript = path.join(kitRoot, 'data (backup)', 'levels', 'test', 'scripts', 'mission.hsc');
  touch(dataScript);
  touch(tagScript);
  touch(backupScript);

  assert.equal(isCanonicalScriptPathInKit(dataScript, kitRoot), true);
  assert.equal(isCanonicalScriptPathInKit(tagScript, kitRoot), true);
  assert.equal(isCanonicalScriptPathInKit(backupScript, kitRoot), false);
});

test('selects the deepest containing Editing Kit and preserves its configured game key', t => {
  const outerRoot = createFixture(t);
  const customKitRoot = path.join(outerRoot, 'custom-kit-name');
  const scriptPath = path.join(customKitRoot, 'data', 'levels', 'test', 'scripts', 'mission.hsc');
  touch(scriptPath);

  assert.deepEqual(
    chooseContainingKitGame(scriptPath, [
      {kitId: 'hsc1', kitRoot: outerRoot},
      {kitId: 'h2amp', kitRoot: customKitRoot}
    ]),
    {kitId: 'h2amp', kitRoot: customKitRoot}
  );
});

test('does not collapse H4 and H2AMPEK when the same root claims both profiles', t => {
  const kitRoot = createFixture(t);
  const scriptPath = path.join(kitRoot, 'data', 'levels', 'test', 'scripts', 'mission.hsc');
  touch(scriptPath);

  assert.equal(
    chooseContainingKitGame(scriptPath, [
      {kitId: 'hsc4', kitRoot},
      {kitId: 'h2amp', kitRoot}
    ]),
    undefined
  );
});

test('a detected kit game overrides the initial hsc1 language and drives the tooltip', () => {
  const halo2 = selectHaloGame('hsc1', 'hsc2');
  const halo4 = selectHaloGame('hsc1', 'hsc4');
  const halo2Amp = selectHaloGame('hsc1', 'h2amp');
  assert.equal(halo2?.languageId, 'hsc2');
  assert.equal(halo4?.languageId, 'hsc4');
  assert.equal(halo2Amp?.kitId, 'h2amp');
  assert.equal(halo2Amp?.languageId, 'hsc4');
  assert.equal(compileStatusTooltip(halo2), 'Compile the Halo 2 scenario scripts');
  assert.equal(compileStatusTooltip(halo4), 'Compile the Halo 4 scenario scripts');
  assert.equal(
    compileStatusTooltip(halo2Amp),
    'Compile the Halo 2 Anniversary MP scenario scripts'
  );
});

test('recognizes Tool failures even when tool.exe exits with code zero', () => {
  assert.equal(
    containsFatalToolOutput("tool: Scenario '__atlas_missing_scenario__' failed to load.\r\n"),
    true
  );
  assert.equal(containsFatalToolOutput('Tool exited normally.'), false);
});

test('disables unsupported compile commands and exposes no custom override setting', () => {
  const expectedEnablement = 'atlas.compiler.activeScriptCanCompile';
  extensionManifest.contributes.commands.forEach(command => {
    assert.equal(command.enablement, expectedEnablement);
  });
  const properties = extensionManifest.contributes.configuration.properties;
  assert.equal(Object.hasOwn(properties, 'atlas.compiler.commandOverrides'), false);
  assert.equal(Object.hasOwn(properties['atlas.compiler.editingKitPaths'].properties, 'h2amp'), true);
  assert.deepEqual(
    extensionManifest.capabilities.untrustedWorkspaces.restrictedConfigurations,
    ['atlas.compiler.editingKitPaths']
  );
});

test('path containment does not accept sibling prefixes', t => {
  const root = createFixture(t);
  assert.equal(isPathWithin(path.join(root, 'tags'), path.join(root, 'tags', 'levels')), true);
  assert.equal(isPathWithin(path.join(root, 'tags'), path.join(root, 'tags-other', 'levels')), false);
});

test('canonical containment rejects a tags junction that escapes the kit', t => {
  const root = createFixture(t);
  const kitRoot = path.join(root, 'kit');
  const outsideTags = path.join(root, 'outside-tags');
  const linkedTags = path.join(kitRoot, 'tags');
  const scenarioPath = path.join(linkedTags, 'levels', 'escaped.scenario');
  fs.mkdirSync(kitRoot, {recursive: true});
  fs.mkdirSync(path.join(outsideTags, 'levels'), {recursive: true});

  try {
    fs.symlinkSync(outsideTags, linkedTags, process.platform === 'win32' ? 'junction' : 'dir');
  } catch (error) {
    t.skip(`Directory links are unavailable: ${error.message}`);
    return;
  }
  touch(path.join(outsideTags, 'levels', 'escaped.scenario'));
  assert.throws(() => canonicalExistingPathWithin(kitRoot, scenarioPath), /resolves outside/);
});

test('does not classify a script whose data junction escapes the Editing Kit', t => {
  const root = createFixture(t);
  const kitRoot = path.join(root, 'kit');
  const outsideData = path.join(root, 'outside-data');
  const linkedData = path.join(kitRoot, 'data');
  const scriptPath = path.join(linkedData, 'levels', 'escaped', 'scripts', 'mission.hsc');
  fs.mkdirSync(kitRoot, {recursive: true});
  fs.mkdirSync(path.join(outsideData, 'levels', 'escaped', 'scripts'), {recursive: true});

  try {
    fs.symlinkSync(outsideData, linkedData, process.platform === 'win32' ? 'junction' : 'dir');
  } catch (error) {
    t.skip(`Directory links are unavailable: ${error.message}`);
    return;
  }
  touch(path.join(outsideData, 'levels', 'escaped', 'scripts', 'mission.hsc'));
  assert.equal(isCanonicalScriptPathInKit(scriptPath, kitRoot), false);
});

test('does not classify an internal junction that changes the visible scenario path', t => {
  const kitRoot = createFixture(t);
  const targetScripts = path.join(kitRoot, 'tags', 'levels', 'actual', 'scripts');
  const linkedScripts = path.join(kitRoot, 'data', 'redirected');
  const visibleScriptPath = path.join(linkedScripts, 'mission.hsc');
  fs.mkdirSync(targetScripts, {recursive: true});
  fs.mkdirSync(path.dirname(linkedScripts), {recursive: true});

  try {
    fs.symlinkSync(targetScripts, linkedScripts, process.platform === 'win32' ? 'junction' : 'dir');
  } catch (error) {
    t.skip(`Directory links are unavailable: ${error.message}`);
    return;
  }
  touch(path.join(targetScripts, 'mission.hsc'));
  assert.equal(isCanonicalScriptPathInKit(visibleScriptPath, kitRoot), false);
  assert.equal(
    chooseContainingKitGame(visibleScriptPath, [{kitId: 'hsc2', kitRoot}]),
    undefined
  );
});
