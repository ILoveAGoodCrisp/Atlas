'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const completion = require("./providers/completion");
const hover = require("./providers/hover");
const signature = require("./providers/signature");
const scriptCompiler_1 = require("./commands/scriptCompiler");
// import * as signature from './providers/signatures'
function activate(context) {
    console.log("Atlas: Start");
    const sighelp = new signature.hsProvider();
    const selector = [{ language: "hscr" }, { language: "hsco" }, { language: "hsc3" }, { language: "hsc2" }, { language: "hsc1" }];
    context.subscriptions.push(vscode_1.languages.registerCompletionItemProvider(selector, new completion.hsProvider(context.extensionPath)));
    context.subscriptions.push(vscode_1.languages.registerHoverProvider(selector, new hover.hsProvider()));
    context.subscriptions.push(vscode_1.languages.registerSignatureHelpProvider(selector, sighelp, '(', ',', ' '));
    context.subscriptions.push(vscode_1.languages.registerCompletionItemProvider("hsc4", new completion.hsProvider(context.extensionPath)));
    context.subscriptions.push(vscode_1.languages.registerHoverProvider("hsc4", new hover.hsProvider()));
    context.subscriptions.push(vscode_1.languages.registerSignatureHelpProvider("hsc4", sighelp, '(', ',', ' '));
    const command = 'atlas.compileScenarioScripts';
    const commandHandler = () => {
        (0, scriptCompiler_1.runToolExecutable)();
    };
    context.subscriptions.push(vscode_1.commands.registerCommand(command, commandHandler));
    const commandTrigger = 'triggerSignatureHelp';
    const commandcommandTriggerHandler = () => {
        vscode_1.commands.executeCommand('editor.action.triggerParameterHints');
    };
    context.subscriptions.push(vscode_1.commands.registerCommand(commandTrigger, commandcommandTriggerHandler));
}
exports.activate = activate;
function deactivate() {
    console.log("Atlas: End");
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map