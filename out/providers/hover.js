"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsProvider = void 0;
const vscode = require("vscode");
const functions_1 = require("../definitions/functions");
const keywords_1 = require("../definitions/keywords");
const scriptTypes_1 = require("../definitions/scriptTypes");
const valueTypes_1 = require("../definitions/valueTypes");
function return_hover(detail, documentation) {
    const command = `${detail}\n\n${documentation}`;
    return new vscode.Hover({ language: "plaintext", value: command });
}
class hsProvider {
    provideHover(document, position, token) {
        const newStyle = document.languageId == "hsc4";
        let game = "H1";
        if (document.languageId == "hsc2")
            game = "H2";
        else if (document.languageId == "hsc3")
            game = "H3";
        else if (document.languageId == "hsco")
            game = "HO";
        else if (document.languageId == "hscr")
            game = "HR";
        else if (newStyle)
            game = "H4";
        const wordRange = document.getWordRangeAtPosition(position);
        if (wordRange == null) {
            return Promise.resolve(null);
        }
        const positionTranslate = wordRange.end.translate(0, 2);
        const wordRangeTranslate = document.getWordRangeAtPosition(positionTranslate);
        const hoverText = document.getText(wordRange);
        const hoverTextExtended = document.getText(wordRangeTranslate);
        let detail = "";
        let documentation = "";
        if (newStyle) {
            const foundKeyword = keywords_1.hsKeywords.find((def) => def.name === hoverText);
            if (foundKeyword != null) {
                if (foundKeyword.name.toLowerCase() == 'begin_count' || foundKeyword.name.toLowerCase() == 'begin_random_count') {
                    detail = "passthrough " + foundKeyword.name + "(long)";
                    ;
                }
                else {
                    detail = "passthrough " + foundKeyword.name;
                }
                documentation = foundKeyword.desc;
                return return_hover(detail, documentation);
            }
        }
        const foundScriptType = scriptTypes_1.hsScriptTypes.find((def) => def.name === hoverText);
        if (foundScriptType != null) {
            detail = "Script Type: " + foundScriptType.name;
            documentation = foundScriptType.desc;
            return return_hover(detail, documentation);
        }
        const foundValueType = valueTypes_1.hsValueTypes.find((def) => def.name === hoverText.toLowerCase() && def.games.includes(game));
        // Check that this isn't a function, as some functions have the same names as return types
        if (foundValueType != null && hoverTextExtended.indexOf("(") === -1) {
            detail = foundValueType.name;
            documentation = foundValueType.desc;
            return return_hover(detail, documentation);
        }
        const foundFunc = functions_1.hsFunctions.find((def) => def.name === hoverText.toLowerCase() && def.games.includes(game));
        if (foundFunc != null) {
            if (newStyle) {
                const joinedArgs = foundFunc.args.join(', ');
                detail = foundFunc.name + "(" + joinedArgs + ")" + " -> " + foundFunc.r_type;
            }
            else {
                const joinedArgs = " " + foundFunc.args.join(' ');
                detail = foundFunc.r_type + " " + "(" + foundFunc.name + joinedArgs + ")";
            }
            documentation = foundFunc.desc;
            return return_hover(detail, documentation);
        }
        return Promise.resolve(null);
    }
}
exports.hsProvider = hsProvider;
//# sourceMappingURL=hover.js.map