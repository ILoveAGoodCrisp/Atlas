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
        this.itemsHS1 = new Array();
        this.itemsHS2 = new Array();
        this.itemsHS3 = new Array();
        this.itemsHSO = new Array();
        this.itemsHSR = new Array();
        this.itemsHS4 = new Array();
        for (var i in functions_1.hsFunctions) {
            var func = functions_1.hsFunctions[i];
            var itemNew = new vscode.CompletionItem(func.name);
            var itemClassic = new vscode.CompletionItem(func.name);
            let joinedArgs = func.args.join(', ');
            itemNew.kind = vscode.CompletionItemKind.Function;
            itemClassic.kind = vscode.CompletionItemKind.Function;
            itemNew.documentation = func.desc;
            itemClassic.documentation = func.desc;
            itemNew.command = { command: 'triggerSignatureHelp', title: 'Trigger Signature Help', };
            itemClassic.command = { command: 'triggerSignatureHelp', title: 'Trigger Signature Help', };
            itemNew.detail = func.r_type + " " + func.name + "(" + joinedArgs + ")";
            itemNew.insertText = new vscode.SnippetString(func.name + '(${1})');
            joinedArgs = " " + func.args.join(' ');
            itemClassic.detail = func.r_type + " " + "(" + func.name + joinedArgs + ")";
            itemClassic.insertText = new vscode.SnippetString(func.name + ' ${1}');
            if (func.games.includes('H1')) {
                this.itemsHS1.push(itemClassic);
            }
            if (func.games.includes('H2')) {
                this.itemsHS2.push(itemClassic);
            }
            if (func.games.includes('H3')) {
                this.itemsHS3.push(itemClassic);
            }
            if (func.games.includes('HO')) {
                this.itemsHSO.push(itemClassic);
            }
            if (func.games.includes('HR')) {
                this.itemsHSR.push(itemClassic);
            }
            if (func.games.includes('H4')) {
                this.itemsHS4.push(itemNew);
            }
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
            this.itemsHS4.push(item);
        }
        for (var i in scriptTypes_1.hsScriptTypes) {
            var scriptType = scriptTypes_1.hsScriptTypes[i];
            var item = new vscode.CompletionItem(scriptType.name);
            item.detail = "Script Type: " + scriptType.name;
            item.documentation = scriptType.desc;
            item.kind = vscode.CompletionItemKind.Class;
            this.itemsHS1.push(item);
            this.itemsHS2.push(item);
            this.itemsHS3.push(item);
            this.itemsHSO.push(item);
            this.itemsHSR.push(item);
            this.itemsHS4.push(item);
        }
        for (var i in valueTypes_1.hsValueTypes) {
            var returnType = valueTypes_1.hsValueTypes[i];
            var item = new vscode.CompletionItem(returnType.name);
            item.detail = returnType.name;
            item.documentation = returnType.desc;
            item.kind = vscode.CompletionItemKind.Property;
            if (returnType.games.includes('H1')) {
                this.itemsHS1.push(item);
            }
            if (returnType.games.includes('H2')) {
                this.itemsHS2.push(item);
            }
            if (returnType.games.includes('H3')) {
                this.itemsHS3.push(item);
            }
            if (returnType.games.includes('HO')) {
                this.itemsHSO.push(item);
            }
            if (returnType.games.includes('HR')) {
                this.itemsHSR.push(item);
            }
            if (returnType.games.includes('H4')) {
                this.itemsHS4.push(item);
            }
        }
    }
    provideCompletionItems(document, position, token, context) {
        return new Promise((resolve, reject) => {
            // Get the text of the current line
            const currentLine = vscode.window.activeTextEditor?.document.lineAt(position.line).text.trim();
            // Check if the line starts with "script," "global," or "local" (case insensitive)
            if (currentLine &&
                /^\t/i.test(currentLine) &&
                false) {
                // If the line starts with a tab, i.e in the body of a script, return an empty array
                resolve([]);
            }
            else {
                // Otherwise, provide completion items as usual
                let funcItems = [];
                if (document.languageId == "hsc1") {
                    resolve(this.itemsHS1.concat(funcItems));
                }
                else if (document.languageId == "hsc2") {
                    resolve(this.itemsHS2.concat(funcItems));
                }
                else if (document.languageId == "hsc3") {
                    resolve(this.itemsHS3.concat(funcItems));
                }
                else if (document.languageId == "hsco") {
                    resolve(this.itemsHSO.concat(funcItems));
                }
                else if (document.languageId == "hscr") {
                    resolve(this.itemsHSR.concat(funcItems));
                }
                else if (document.languageId == "hsc4") {
                    resolve(this.itemsHS4.concat(funcItems));
                }
            }
        });
    }
}
exports.hsProvider = hsProvider;
//# sourceMappingURL=completion.js.map