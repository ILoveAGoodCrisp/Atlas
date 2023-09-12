import * as vscode from 'vscode';

import {hsFunctions} from '../definitions/functions'
import {hsKeywords} from '../definitions/keywords'
import {hsScriptTypes} from '../definitions/scriptTypes'
import {hsValueTypes} from '../definitions/valueTypes'

// Provides function completion
export class hsProvider {
	itemsNew: vscode.CompletionItem[];
	itemsClassic: vscode.CompletionItem[];

	// Generate completion items for the hardcoded functions
	constructor(extensionPath: string) {
		this.itemsNew = new Array<vscode.CompletionItem>();
		this.itemsClassic = new Array<vscode.CompletionItem>();
		for (var i in hsFunctions) {
			var func = hsFunctions[i];
			var itemClassic = new vscode.CompletionItem(func.name);
			var itemNew = new vscode.CompletionItem(func.name);
			let joinedArgs = func.args.join(', ');
			itemNew.detail = func.r_type + " " + func.name + "(" + joinedArgs + ")";
			itemNew.insertText = new vscode.SnippetString(func.name + '(${1})');
			itemNew.documentation = func.desc;
			itemNew.kind = vscode.CompletionItemKind.Function;
			itemNew.command = {
				command: 'triggerSignatureHelp',
				title: 'Trigger Signature Help',
			};
			this.itemsNew.push(itemNew);

			joinedArgs = " " + func.args.join(' ');
			itemClassic.detail = func.r_type + " " + "(" + func.name + joinedArgs + ")";
			itemClassic.insertText = new vscode.SnippetString(func.name + ' ${1}');
			itemClassic.documentation = func.desc;
			itemClassic.kind = vscode.CompletionItemKind.Function;
			itemClassic.command = {
				command: 'triggerSignatureHelp',
				title: 'Trigger Signature Help',
			};
			this.itemsClassic.push(itemClassic);
		}
		for (var i in hsKeywords) {
			var keyword = hsKeywords[i];

			var item = new vscode.CompletionItem(keyword.name);
			if (keyword.name == 'begin_count' || keyword.name == 'begin_random_count')
			{
				item.detail = keyword.name + "(long) -> passthrough";
				item.insertText = new vscode.SnippetString(keyword.name + '(${1})');
			}
			else
			{
				item.detail = keyword.name + " -> passthrough";
			}

			item.documentation = keyword.desc;
			
			item.kind = vscode.CompletionItemKind.Keyword;
			this.itemsNew.push(item);
		}
		for (var i in hsScriptTypes) {
			var scriptType = hsScriptTypes[i];

			var item = new vscode.CompletionItem(scriptType.name);
			item.detail = "Script Type: " + scriptType.name
			item.documentation = scriptType.desc;
			item.kind = vscode.CompletionItemKind.Class;
			this.itemsNew.push(item);
			this.itemsClassic.push(item);
		}
		for (var i in hsValueTypes) {
			var returnType = hsValueTypes[i];

			var item = new vscode.CompletionItem(returnType.name);
			item.detail = returnType.name
			item.documentation = returnType.desc;
			item.kind = vscode.CompletionItemKind.Property;
			this.itemsNew.push(item);
			this.itemsClassic.push(item);
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
		
				// Check if the line starts with "script," "global," or "local" (case insensitive)
				if (
					currentLine &&
					/^(script|global|local)\b/i.test(currentLine)
				) {
					// If the line starts with any of these keywords, return an empty array
					resolve([]);
				} else {
					// Otherwise, provide completion items as usual
					let funcItems: vscode.CompletionItem[] = [];
					if (document.languageId == "hsc4")
					{
						resolve(this.itemsNew.concat(funcItems));
					}
					else
					{
						resolve(this.itemsClassic.concat(funcItems));
					}
					
				}
			});
		}
	}		
