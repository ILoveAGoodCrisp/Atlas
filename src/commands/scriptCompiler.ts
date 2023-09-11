import * as vscode from 'vscode';
import * as child_process from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

// Create a custom output channel
const outputChannel = vscode.window.createOutputChannel('Tool Output');

// Function to find the 'tool.exe' executable in the specified directory or its parent directories
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

  return null; // 'tool.exe' not found after maxIterations iterations
}

// Function to determine the path to the scenario file based on the current document's location
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

// Function to create a relative .scenario path by slicing off the path to the folder containing tool.exe
function createRelativeScenarioPath(toolPath: string, scenarioPath: string): string {
    const toolDir = path.dirname(toolPath);
    let relativePath = path.relative(toolDir, scenarioPath);
  
    // Check if the relative path starts with "tags\" and remove it
    console.log(relativePath)
    if (relativePath.startsWith('tags\\')) {
      relativePath = relativePath.substring(5); // Remove "tags\" (5 characters)
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

  // Find the 'tool.exe' executable in the current directory or its parents
  const toolExecutablePath = findToolExecutable(path.dirname(filePath), 10);

  if (!toolExecutablePath) {
    vscode.window.showErrorMessage('Could not find the "tool.exe" executable in the specified directories.');
    return;
  }

  // Determine the scenario path based on the current document's location
  const scenarioPath = getScenarioPath(filePath);

  if (!scenarioPath) {
    vscode.window.showErrorMessage('Could not find a matching scenario file.');
    return;
  }

  // Create a relative .scenario path by slicing off the path to the folder containing tool.exe
  const relativeScenarioPath = createRelativeScenarioPath(toolExecutablePath, scenarioPath);

  // Change the current working directory to the folder containing 'tool.exe'
  const toolDirectory = path.dirname(toolExecutablePath);
  process.chdir(toolDirectory);

  // Run 'tool.exe' with the specified arguments
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
      vscode.window.showInformationMessage('Executable ran successfully.');
    } else {
      vscode.window.showErrorMessage('Executable encountered an error.');
    }
  });

  // Show the custom output channel in the Output window
  outputChannel.show();
}
