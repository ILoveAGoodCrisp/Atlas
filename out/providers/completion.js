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
        this.itemsNew = new Array();
        this.itemsClassic = new Array();
        for (var i in functions_1.hsFunctions) {
            var func = functions_1.hsFunctions[i];
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
            this.itemsNew.push(item);
        }
        for (var i in scriptTypes_1.hsScriptTypes) {
            var scriptType = scriptTypes_1.hsScriptTypes[i];
            var item = new vscode.CompletionItem(scriptType.name);
            item.detail = "Script Type: " + scriptType.name;
            item.documentation = scriptType.desc;
            item.kind = vscode.CompletionItemKind.Class;
            this.itemsNew.push(item);
            this.itemsClassic.push(item);
        }
        for (var i in valueTypes_1.hsValueTypes) {
            var returnType = valueTypes_1.hsValueTypes[i];
            var item = new vscode.CompletionItem(returnType.name);
            item.detail = returnType.name;
            item.documentation = returnType.desc;
            item.kind = vscode.CompletionItemKind.Property;
            this.itemsNew.push(item);
            this.itemsClassic.push(item);
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
                if (document.languageId == "hsc4") {
                    resolve(this.itemsNew.concat(funcItems));
                }
                else {
                    resolve(this.itemsClassic.concat(funcItems));
                }
            }
        });
    }
}
exports.hsProvider = hsProvider;
//# sourceMappingURL=completion.js.map