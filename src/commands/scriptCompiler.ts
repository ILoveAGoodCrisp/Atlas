import * as vscode from 'vscode';
import * as child_process from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

const outputChannel = vscode.window.createOutputChannel('Tool Output');

function findToolExecutable(startingDir: string, maxIterations: number): string | null {
  let currentDir = startingDir;
  let iteration = 0;

  while (iteration < maxIterations) {
    const toolPath = path.join(currentDir, 'tool.exe');

    if (fs.existsSync(toolPath)) {
      return toolPath;
    }

    const parentDir = path.dirname(currentDir);

    // Check if we have reached the root directory
    if (parentDir === currentDir) {
      break;
    }

    currentDir = parentDir;
    iteration++;
  }

  return null;
}

function getScenarioPath(documentPath: string): string | null {
  const scriptFolderPath = path.dirname(documentPath);

  if (path.basename(scriptFolderPath) != 'scripts')
  {
    console.log("File not in scripts folder")
    return null
  }

  if (!fs.existsSync(scriptFolderPath) || !fs.lstatSync(scriptFolderPath).isDirectory()) {
    console.log("Failed to find script folder")
    return null;
  }

  const parentDirPath = path.dirname(scriptFolderPath);
  const parentDirName = path.basename(parentDirPath);
  console.log(parentDirName)
  const scenarioFileName = `${parentDirName}.scenario`;
  console.log(scenarioFileName)

  const scenarioFilePath = path.join(parentDirPath, scenarioFileName);
  const scenarioFilePathNoExt = path.join(parentDirPath, parentDirName);
  console.log(scenarioFilePath)

  if (fs.existsSync(scenarioFilePath) && fs.lstatSync(scenarioFilePath).isFile()) {
    return scenarioFilePathNoExt;
  }

  return null;
}

function createRelativeScenarioPath(toolPath: string, scenarioPath: string): string {
    const toolDir = path.dirname(toolPath);
    let relativePath = path.relative(toolDir, scenarioPath);
  
    console.log(relativePath)
    if (relativePath.startsWith('tags\\')) {
      relativePath = relativePath.substring(5); // Remove "tags\"
    }

    console.log(relativePath)
  
    return relativePath;
  }
  

export function runToolExecutable() {
  const activeEditor = vscode.window.activeTextEditor;

  if (!activeEditor) {
    vscode.window.showErrorMessage('No active text editor found.');
    return;
  }

  const document = activeEditor.document;
  const filePath = document.uri.fsPath;

  const toolExecutablePath = findToolExecutable(path.dirname(filePath), 10);

  if (!toolExecutablePath) {
    vscode.window.showErrorMessage('Failed to find tool. Is your script folder outside of your editing kit tags directory?');
    return;
  }

  // Determine the scenario path based on the current document's location
  const scenarioPath = getScenarioPath(filePath);

  if (!scenarioPath) {
    vscode.window.showErrorMessage('No Scenario file found. Is this a global or object script?');
    return;
  }

  // Create a relative .scenario path by slicing off the path to the folder containing tool
  const relativeScenarioPath = createRelativeScenarioPath(toolExecutablePath, scenarioPath);

  const toolDirectory = path.dirname(toolExecutablePath);
  process.chdir(toolDirectory);

  const child = child_process.spawn('tool', ['compile-scripts', relativeScenarioPath]);

  child.stdout.on('data', (data) => {
    const output = data.toString();
    outputChannel.append(output);
    console.log(`stdout: ${output}`);
  });

  child.stderr.on('data', (data) => {
    const errorOutput = data.toString();
    outputChannel.appendLine(errorOutput);
    console.error(`stderr: ${errorOutput}`);
  });

  child.on('close', (code) => {
    if (code === 0) {
      vscode.window.showInformationMessage('Scripts Compile executed. See output for results');
    } else {
      vscode.window.showErrorMessage('Script Compile crashed');
    }
  });

  outputChannel.show();
}
