import * as vscode from 'vscode';
import {hsFunctions, HSFunction} from '../definitions/functions'
import {hsValueTypes} from '../definitions/valueTypes'

function getSignatureInformation(hsFunction: HSFunction, argIndex: number, newStyle: boolean): vscode.SignatureInformation {
    const signature = new vscode.SignatureInformation("", "");
    signature.parameters = hsFunction.args.map(arg => new vscode.ParameterInformation(arg, (argIndex + 1) + ": " + hsValueTypes.find((def) => def.name === arg.replace('?',''))?.desc));
    signature.documentation = "Function: " + hsFunction.desc;
    if (newStyle)
    {
        const joinedArgs = hsFunction.args.join(', ');
        signature.label = hsFunction.r_type + " " + hsFunction.name + "(" + joinedArgs + ")";
    }
    else
    {
        const joinedArgs = ' ' + hsFunction.args.join(' ');
        signature.label = hsFunction.r_type + " " + "(" + hsFunction.name + joinedArgs + ")";
    }


    return signature;
}

function countCommasBetweenParentheses(inputString: string, newStyle: boolean): number {
    // Regular expression to match text within parentheses and count commas inside it
    const regex = /\(([^)]*)\)/g;

    let commaCount = 1;
    if (newStyle)
    {
        commaCount--;
    }

    // Find all matches of text within parentheses in the input string
    const matches = inputString.match(regex);

    if (matches) {
        // Iterate through the matches and count commas in each match
        for (const match of matches) {
            let commaMatches = match.match(/\\s/g);
            if (newStyle)
            {
                commaMatches = match.match(/,/g);
            }
            if (commaMatches) {
                commaCount += commaMatches.length;
            }
        }
    }

    return commaCount;
}

export class hsProvider implements vscode.SignatureHelpProvider{
    public provideSignatureHelp(document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken): vscode.ProviderResult<vscode.SignatureHelp>
        {
            const newStyle = document.languageId == "hsc4"
            console.log(document.languageId);
            let delimiter = ' '
            if (newStyle)
            {
                delimiter = ','
            }
            const line = document.lineAt(position.line).text;
            let startIndex = -1;
            let endIndex = -1;
            let argIndex = 0;
            let skipOpenParenCount = 0

            for (let i = position.character; i < line.length; i++) {
                if (line[i] === ')') {
                    endIndex = i;
                    break;
                } else if (line[i] === '(') {
                    skipOpenParenCount++
                }
            }

            if (endIndex === -1) {
                return;
            }

            for (let i = position.character - 1; i < line.length; i--) {
                if (line[i] === delimiter)
                    argIndex++
                if (line[i] === '(') {
                    if (skipOpenParenCount > 0)
                    {
                        skipOpenParenCount--
                    }
                    else
                    {
                        startIndex = i;
                        break;
                    }
 
                } else if (line[i] === ')') {
                    skipOpenParenCount++
                }
            }

            if (startIndex === -1) {
                return;
            }

            let startPosition = new vscode.Position(position.line, startIndex);
            if (newStyle)
            {
                startPosition = new vscode.Position(position.line, startIndex + 1);
            }
            const endPosition = new vscode.Position(position.line, endIndex);
    
            const range = new vscode.Range(startPosition, endPosition);
            const selectedText = document.getText(range);
            // Get the text before the selected text
            const textBeforeSelection = line.slice(0, startIndex);
            // Use a regular expression to extract the first word
            let match = selectedText.match(/(?<=\()\w+/);
            if (newStyle)
            {
                match = textBeforeSelection.match(/[\w$]+$/);
            }
            
            
            if (match == null) {
                return null;
            }
            console.log(match[0]);

            const functionName = match[0];

            const foundFunc = hsFunctions.find((def) => def.name === functionName);
            if(foundFunc == null) {
                return null;
            }

            const signatureHelp = new vscode.SignatureHelp();

            const ignoreCommas = countCommasBetweenParentheses(selectedText, newStyle);
            const realArgIndex = Math.max(argIndex - ignoreCommas, 0);
            signatureHelp.activeSignature = 0; // Index of the active signature
            signatureHelp.activeParameter = realArgIndex; // Index of the active parameter
            const signature = getSignatureInformation(foundFunc, realArgIndex, newStyle);

            // Add the signature to the SignatureHelp
            signatureHelp.signatures.push(signature);
            
            return signatureHelp;
            
        }
}