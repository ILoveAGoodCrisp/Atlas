"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsProvider = void 0;
const vscode = require("vscode");
const functions_1 = require("../definitions/functions");
const keywords_1 = require("../definitions/keywords");
const scriptTypes_1 = require("../definitions/scriptTypes");
const valueTypes_1 = require("../definitions/valueTypes");
// Provides function completion
class hsProvider {
    // Generate completion items for the hardcoded functions
    constructor(extensionPath) {
        this.items = new Array();
        const activeTextEditor = vscode.window.activeTextEditor;
        const languageId = activeTextEditor?.document.languageId;
        for (var i in functions_1.hsFunctions) {
            var func = functions_1.hsFunctions[i];
            var item = new vscode.CompletionItem(func.name);
            if (languageId == 'hsc4') {
                const joinedArgs = func.args.join(', ');
                item.detail = func.r_type + " " + func.name + "(" + joinedArgs + ")";
                item.insertText = new vscode.SnippetString(func.name + '(${1})');
            }
            else {
                const joinedArgs = " " + func.args.join(' ');
                item.detail = func.r_type + " " + "(" + func.name + joinedArgs + ")";
                item.insertText = new vscode.SnippetString(func.name + ' ${1}');
            }
            item.documentation = func.desc;
            item.kind = vscode.CompletionItemKind.Function;
            item.command = {
                command: 'triggerSignatureHelp',
                title: 'Trigger Signature Help',
            };
            this.items.push(item);
        }
        if (languageId == 'hsc4') {
            for (var i in keywords_1.hsKeywords) {
                var keyword = keywords_1.hsKeywords[i];
                var item = new vscode.CompletionItem(keyword.name);
                if (keyword.name == 'begin_count' || keyword.name == 'begin_random_count') {
                    item.detail = keyword.name + "(long) -> passthrough";
                    item.insertText = new vscode.SnippetString(keyword.name + '(${1})');
                }
                else {
                    item.detail = keyword.name + " -> passthrough";
                }
                item.documentation = keyword.desc;
                item.kind = vscode.CompletionItemKind.Keyword;
                this.items.push(item);
            }
        }
        for (var i in scriptTypes_1.hsScriptTypes) {
            var scriptType = scriptTypes_1.hsScriptTypes[i];
            var item = new vscode.CompletionItem(scriptType.name);
            item.detail = "Script Type: " + scriptType.name;
            item.documentation = scriptType.desc;
            item.kind = vscode.CompletionItemKind.Class;
            this.items.push(item);
        }
        for (var i in valueTypes_1.hsValueTypes) {
            var returnType = valueTypes_1.hsValueTypes[i];
            var item = new vscode.CompletionItem(returnType.name);
            item.detail = returnType.name;
            item.documentation = returnType.desc;
            item.kind = vscode.CompletionItemKind.Property;
            this.items.push(item);
        }
    }
    provideCompletionItems(document, position, token, context) {
        return new Promise((resolve, reject) => {
            // Get the text of the current line
            const currentLine = vscode.window.activeTextEditor?.document.lineAt(position.line).text.trim();
            // Check if the line starts with "script," "global," or "local" (case insensitive)
            if (currentLine &&
                /^(script|global|local)\b/i.test(currentLine)) {
                // If the line starts with any of these keywords, return an empty array
                resolve([]);
            }
            else {
                // Otherwise, provide completion items as usual
                let funcItems = [];
                resolve(this.items.concat(funcItems));
            }
        });
    }
}
exports.hsProvider = hsProvider;
//# sourceMappingURL=completion.js.map