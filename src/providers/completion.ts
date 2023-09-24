import * as vscode from 'vscode';

import {hsFunctions} from '../definitions/functions'
import {hsGlobals} from '../definitions/globals'
import {hsKeywords} from '../definitions/keywords'
import {hsScriptTypes} from '../definitions/scriptTypes'
import {hsValueTypes} from '../definitions/valueTypes'

// Provides function completion
export class hsProvider {
	itemsHS1: vscode.CompletionItem[];
	itemsHS2: vscode.CompletionItem[];
	itemsHS3: vscode.CompletionItem[];
	itemsHSO: vscode.CompletionItem[];
	itemsHSR: vscode.CompletionItem[];
	itemsHS4: vscode.CompletionItem[];

	// Generate completion items for the hardcoded functions
	constructor(extensionPath: string) {
		this.itemsHS1 = new Array<vscode.CompletionItem>();
		this.itemsHS2 = new Array<vscode.CompletionItem>();
		this.itemsHS3 = new Array<vscode.CompletionItem>();
		this.itemsHSO = new Array<vscode.CompletionItem>();
		this.itemsHSR = new Array<vscode.CompletionItem>();
		this.itemsHS4 = new Array<vscode.CompletionItem>();
		for (var i in hsFunctions) {

			var func = hsFunctions[i];
			var itemNew = new vscode.CompletionItem(func.name);
			var itemClassic = new vscode.CompletionItem(func.name);
			let joinedArgs = func.args.join(', ');
			if (func.args.length <= 0)
				joinedArgs = "";
			itemNew.detail = func.r_type + " " + func.name + "(" + joinedArgs + ")";
			itemNew.kind = vscode.CompletionItemKind.Function;
			itemClassic.kind = vscode.CompletionItemKind.Function;

			itemNew.documentation = func.desc;
			itemClassic.documentation = func.desc;

			itemNew.command = {command: 'atlas.triggerSignatureHelp', title: 'Trigger Signature Help',};
			itemClassic.command = {command: 'atlas.triggerSignatureHelp', title: 'Trigger Signature Help',};
			if (func.args.length > 0)
			{
				itemClassic.insertText = func.name + ' '
			}
			else
			{
				itemClassic.insertText = func.name
			}
			
			// itemNew.insertText = new vscode.SnippetString(func.name + '(${1})');

			joinedArgs = " " + func.args.join(' ');
			// let snip = ' ${1}'
			// if (func.args.length <= 0)
			// {
			// 	joinedArgs = "";
			// 	snip = '${1}'
			// }

			itemClassic.detail = func.r_type + " " + "(" + func.name + joinedArgs + ")";
			// itemClassic.insertText = new vscode.SnippetString(func.name + snip);
			
			
			if (func.games.includes('H1')) 
			{
				this.itemsHS1.push(itemClassic);
			}
			if (func.games.includes('H2')) 
			{
				this.itemsHS2.push(itemClassic);
			}
			if (func.games.includes('H3')) 
			{
				this.itemsHS3.push(itemClassic);
			}
			if (func.games.includes('HO')) 
			{
				this.itemsHSO.push(itemClassic);
			}
			if (func.games.includes('HR')) 
			{
				this.itemsHSR.push(itemClassic);
			}
			if (func.games.includes('H4')) 
			{
				this.itemsHS4.push(itemNew);
			}
		}
		for (var i in hsGlobals) {

			var glob = hsGlobals[i];
			var item = new vscode.CompletionItem(glob.name);
			
			item.kind = vscode.CompletionItemKind.Variable;

			item.detail = glob.r_type + " " + glob.name
			
			if (glob.games.includes('H1')) 
			{
				this.itemsHS1.push(item);
			}
			if (glob.games.includes('H2')) 
			{
				this.itemsHS2.push(item);
			}
			if (glob.games.includes('H3')) 
			{
				this.itemsHS3.push(item);
			}
			if (glob.games.includes('HO')) 
			{
				this.itemsHSO.push(item);
			}
			if (glob.games.includes('HR')) 
			{
				this.itemsHSR.push(item);
			}
			if (glob.games.includes('H4')) 
			{
				this.itemsHS4.push(item);
			}
		}
		for (var i in hsKeywords) {
			var keyword = hsKeywords[i];

			var item = new vscode.CompletionItem(keyword.name);
			if (keyword.name == 'begin_count' || keyword.name == 'begin_random_count')
			{
				item.detail = keyword.name + "(long)";
				item.insertText = new vscode.SnippetString(keyword.name + '(${1})');
			}
			else
			{
				item.detail = keyword.name;
			}

			item.documentation = keyword.desc;
			
			item.kind = vscode.CompletionItemKind.Keyword;
			this.itemsHS4.push(item);
		}
		for (var i in hsScriptTypes) {
			var scriptType = hsScriptTypes[i];

			var item = new vscode.CompletionItem(scriptType.name);
			item.detail = "Script Type: " + scriptType.name
			item.documentation = scriptType.desc;
			item.kind = vscode.CompletionItemKind.Class;
			this.itemsHS1.push(item);
			this.itemsHS2.push(item);
			this.itemsHS3.push(item);
			this.itemsHSO.push(item);
			this.itemsHSR.push(item);
			this.itemsHS4.push(item);
		}
		for (var i in hsValueTypes) {
			var returnType = hsValueTypes[i];

			var item = new vscode.CompletionItem(returnType.name);
			item.detail = returnType.name
			item.documentation = returnType.desc;
			item.kind = vscode.CompletionItemKind.Property;

			if (returnType.games.includes('H1')) 
			{
				this.itemsHS1.push(item);
			}
			if (returnType.games.includes('H2')) 
			{
				this.itemsHS2.push(item);
			}
			if (returnType.games.includes('H3')) 
			{
				this.itemsHS3.push(item);
			}
			if (returnType.games.includes('HO')) 
			{
				this.itemsHSO.push(item);
			}
			if (returnType.games.includes('HR')) 
			{
				this.itemsHSR.push(item);
			}
			if (returnType.games.includes('H4')) 
			{
				this.itemsHS4.push(item);
			}
		}
	}

	provideCompletionItems(document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext
		): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {
			return new Promise<vscode.CompletionItem[]>((resolve, reject) => {
				// Get the text of the current line
				const currentLine = vscode.window.activeTextEditor?.document.lineAt(position.line).text.trim();
		
				// Otherwise, provide completion items as usual
				let funcItems: vscode.CompletionItem[] = [];
				if (document.languageId == "hsc1")
				{
					resolve(this.itemsHS1.concat(funcItems));
				}
				else if (document.languageId == "hsc2")
				{
					resolve(this.itemsHS2.concat(funcItems));
				}
				else if (document.languageId == "hsc3")
				{
					resolve(this.itemsHS3.concat(funcItems));
				}
				else if (document.languageId == "hsco")
				{
					resolve(this.itemsHSO.concat(funcItems));
				}
				else if (document.languageId == "hscr")
				{
					resolve(this.itemsHSR.concat(funcItems));
				}
				else if (document.languageId == "hsc4")
				{
					resolve(this.itemsHS4.concat(funcItems));
				}
					
			});
		}
	}		
