'use strict';
import {ExtensionContext, commands, languages} from 'vscode';
import * as completion from './providers/completion'
import * as hover from './providers/hover'
import * as signature from './providers/signature'
import {runToolExecutable} from './commands/scriptCompiler'
import { DocumentSelector } from 'vscode-languageserver';
// import * as signature from './providers/signatures'

export function activate(context: ExtensionContext) {
	console.log("Atlas: Start");
	const sighelp = new signature.hsProvider();
	const selector: DocumentSelector = [{language: "hscr"}, {language: "hsco"}, {language: "hsc3"}, {language: "hsc2"}, {language: "hsc1"}];
	context.subscriptions.push(languages.registerCompletionItemProvider(selector , new completion.hsProvider(context.extensionPath)));
	context.subscriptions.push(languages.registerHoverProvider(selector, new hover.hsProvider()));
	context.subscriptions.push(languages.registerSignatureHelpProvider(selector, sighelp, '(', ',', ' ',));
	context.subscriptions.push(languages.registerCompletionItemProvider("hsc4" , new completion.hsProvider(context.extensionPath)));
	context.subscriptions.push(languages.registerHoverProvider("hsc4", new hover.hsProvider()));
	context.subscriptions.push(languages.registerSignatureHelpProvider("hsc4", sighelp, '(', ',', ' ',));

	const command = 'atlas.compileScenarioScripts';
	const commandHandler = () => {
		runToolExecutable();
	};
	context.subscriptions.push(commands.registerCommand(command, commandHandler));

	const commandTrigger = 'triggerSignatureHelp';
	const commandcommandTriggerHandler = () => {
		commands.executeCommand('editor.action.triggerParameterHints');
	};
	context.subscriptions.push(commands.registerCommand(commandTrigger, commandcommandTriggerHandler));
}

export function deactivate() {
	console.log("Atlas: End");
}