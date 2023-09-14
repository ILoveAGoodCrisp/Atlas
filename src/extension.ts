'use strict';
import * as vscode from 'vscode';
import * as completion from './providers/completion'
import * as hover from './providers/hover'
import * as signature from './providers/signature'
import * as semantics from './providers/semantics'
import {runToolExecutable} from './commands/scriptCompiler'
import { DocumentSelector } from 'vscode-languageserver';


const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();
const legend = (function() {
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

export function activate(context: vscode.ExtensionContext) {
	console.log("Atlas: Start");
	const sighelp = new signature.hsProvider();
	const selector: DocumentSelector = [{language: "hsc4"}, {language: "hscr"}, {language: "hsco"}, {language: "hsc3"}, {language: "hsc2"}, {language: "hsc1"}];
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider(selector , new completion.hsProvider(context.extensionPath)));
	context.subscriptions.push(vscode.languages.registerHoverProvider(selector, new hover.hsProvider()));
	context.subscriptions.push(vscode.languages.registerSignatureHelpProvider(selector, sighelp, '(', ',', ' ',));
	context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider(selector, new semantics.hsProvider(legend), legend));
	const command = 'atlas.compileScenarioScripts';
	const commandHandler = () => {
		runToolExecutable();
	};
	context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));

	const commandTrigger = 'triggerSignatureHelp';
	const commandcommandTriggerHandler = () => {
		vscode.commands.executeCommand('editor.action.triggerParameterHints');
	};
	context.subscriptions.push(vscode.commands.registerCommand(commandTrigger, commandcommandTriggerHandler));
}

export function deactivate() {
	console.log("Atlas: End");
}