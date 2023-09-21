'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const completion = require("./providers/completion");
const hover = require("./providers/hover");
const signature = require("./providers/signature");
// import * as semantics from './providers/semantics'
const scriptCompiler_1 = require("./commands/scriptCompiler");
const autoParen_1 = require("./commands/autoParen");
const tokenTypes = new Map();
const tokenModifiers = new Map();
const legend = (function () {
    const tokenTypesLegend = [
        'comment', 'string', 'keyword', 'number', 'regexp', 'operator', 'namespace',
        'type', 'struct', 'class', 'interface', 'enum', 'typeParameter', 'function',
        'method', 'decorator', 'macro', 'variable', 'parameter', 'property', 'label'
    ];
    tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));
    const tokenModifiersLegend = [
        'declaration', 'documentation', 'readonly', 'static', 'abstract', 'deprecated',
        'modification', 'async'
    ];
    tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));
    return new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);
})();
// import * as signature from './providers/signatures'
function activate(context) {
    console.log("Atlas: Start");
    const sighelp = new signature.hsProvider();
    const selector = [{ language: "hsc4" }, { language: "hscr" }, { language: "hsco" }, { language: "hsc3" }, { language: "hsc2" }, { language: "hsc1" }];
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(selector, new completion.hsProvider(context.extensionPath)));
    context.subscriptions.push(vscode.languages.registerHoverProvider(selector, new hover.hsProvider()));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider(selector, sighelp, '(', ',', ' '));
    // Saving implementation of semantics until it can fully parse the code. It does not gel well with tmLanguage
    // context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider(selector, new semantics.hsProvider(legend), legend));
    // Script Compile
    const command = 'atlas.compileScenarioScripts';
    const commandHandler = () => {
        (0, scriptCompiler_1.runToolExecutable)();
    };
    context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));
    // SignatureHelp Trigger
    const commandTrigger = 'atlas.triggerSignatureHelp';
    const commandcommandTriggerHandler = () => {
        vscode.commands.executeCommand('atlas.autoParen');
        vscode.commands.executeCommand('editor.action.triggerParameterHints');
    };
    context.subscriptions.push(vscode.commands.registerCommand(commandTrigger, commandcommandTriggerHandler));
    // Autocomplete Parentheses
    const commandAutoParen = 'atlas.autoParen';
    const commandParenHandler = () => {
        (0, autoParen_1.AutoParen)();
    };
    context.subscriptions.push(vscode.commands.registerCommand(commandAutoParen, commandParenHandler));
}
exports.activate = activate;
function deactivate() {
    console.log("Atlas: End");
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map