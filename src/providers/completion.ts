import * as vscode from 'vscode';

import {hsFunctions} from '../definitions/functions'
import {hsKeywords} from '../definitions/keywords'
import {hsScriptTypes} from '../definitions/scriptTypes'
import {hsReturnTypes} from '../definitions/returnTypes'

const return_types_temp = "${2}|void|short|real|ai"

// Provides function completion
export class hsProvider {
	items: vscode.CompletionItem[];

	// Generate completion items for the hardcoded functions
	constructor(extensionPath: string) {
		this.items = new Array<vscode.CompletionItem>();

		for (var i in hsFunctions) {
			var func = hsFunctions[i];
			var item = new vscode.CompletionItem(func.name);
			const joinedArgs = func.args.join(', ');
			item.detail = func.name + "(" + joinedArgs + ")" + " -> " + func.r_type;
			item.documentation = func.desc;
			item.insertText = new vscode.SnippetString(func.name + '(${1})');
			item.kind = vscode.CompletionItemKind.Function;
			item.command = {
				command: 'triggerSignatureHelp',
				title: 'Trigger Signature Help',
			};
			this.items.push(item);
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
			this.items.push(item);
		}

		for (var i in hsScriptTypes) {
			var scriptType = hsScriptTypes[i];

			var item = new vscode.CompletionItem(scriptType.name);
			item.detail = "Script Type: " + scriptType.name
			item.documentation = scriptType.desc;
			item.kind = vscode.CompletionItemKind.Class;
			this.items.push(item);
		}
		for (var i in hsReturnTypes) {
			var returnType = hsReturnTypes[i];

			var item = new vscode.CompletionItem(returnType.name);
			item.detail = returnType.name
			item.documentation = returnType.desc;
			item.kind = vscode.CompletionItemKind.Property;
			this.items.push(item);
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
					resolve(this.items.concat(funcItems));
				}
			});
		}
	}		
