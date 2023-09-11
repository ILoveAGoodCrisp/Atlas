import * as vscode from 'vscode';
import {hsFunctions} from '../definitions/functions'
import {hsKeywords} from '../definitions/keywords'
import {hsScriptTypes} from '../definitions/scriptTypes'
import {hsReturnTypes} from '../definitions/returnTypes'

function return_hover(detail: string, documentation: string)
{
    const command = `${detail}\n\n${documentation}`;
    return new vscode.Hover({language: "hsc", value: command});
}

export class hsProvider implements vscode.HoverProvider {
    public provideHover(document: vscode.TextDocument,
                        position: vscode.Position,
                        token: vscode.CancellationToken)
    {
        const wordRange = document.getWordRangeAtPosition(position);
        if (wordRange == null)
        {
            return Promise.resolve(null);
        }
        const positionTranslate = wordRange.end.translate(0, 2);
        const wordRangeTranslate = document.getWordRangeAtPosition(positionTranslate);
        const hoverText = document.getText(wordRange);
        const hoverTextExtended = document.getText(wordRangeTranslate);
        let detail = ""
        let documentation = ""
        const foundKeyword = hsKeywords.find((def) => def.name === hoverText);
        if (foundKeyword != null)
        {
            if (foundKeyword.name == 'begin_count' || foundKeyword.name == 'begin_random_count')
            {
                detail = foundKeyword.name + "(long) -> passthrough";;
            }
            else
            {
                detail = foundKeyword.name + " -> passthrough";
            }
            documentation = foundKeyword.desc;
            return return_hover(detail, documentation);
        }
        const foundScriptType = hsScriptTypes.find((def) => def.name === hoverText);
        if (foundScriptType != null)
        {
            detail = "Script Type: " + foundScriptType.name;
            documentation = foundScriptType.desc;
            return return_hover(detail, documentation);
        }
        const foundReturnType = hsReturnTypes.find((def) => def.name === hoverText);
        // Check that this isn't a function, as some functions have the same names as return types
        if (foundReturnType != null && hoverTextExtended.indexOf("(") === -1)
        {
            detail = foundReturnType.name;
            documentation = foundReturnType.desc;
            return return_hover(detail, documentation);
        }
        const foundFunc = hsFunctions.find((def) => def.name === hoverText);
        if (foundFunc != null)
        {
            const joinedArgs = foundFunc.args.join(', ');
            detail = foundFunc.name + "(" + joinedArgs + ")" + " -> " + foundFunc.r_type;
            documentation = foundFunc.desc;
            return return_hover(detail, documentation);
        }

        return Promise.resolve(null);
    }
}