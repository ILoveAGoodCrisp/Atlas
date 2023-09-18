"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsProvider = void 0;
const vscode = require("vscode");
const functions_1 = require("../definitions/functions");
const valueTypes_1 = require("../definitions/valueTypes");
function countStringOccurrences(arr, target) {
    const filteredArray = arr.filter((element) => element === target);
    return filteredArray.length;
}
function joinAndConcatWithIndex(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        const joinedString = strings[i] + "_" + (i + 1);
        result.push(joinedString);
    }
    return result;
}
function getSignatureInformation(hsFunction, argIndex, newStyle, game) {
    const signature = new vscode.SignatureInformation("", "");
    // NOTE To Finish. Add count of arg if it is used multiple times
    // let args_dec: string[]
    // for (var a in hsFunction.args) {
    //     var arg = hsFunction.args[a];
    //     hsFunction.args.filter()
    //     const joinedString = strings[i] + "_" + (i + 1);
    //     result.push(joinedString);
    //   }
    signature.parameters = hsFunction.args.map(arg => new vscode.ParameterInformation(arg + "_" + (argIndex + 1), (argIndex + 1) + ": " + valueTypes_1.hsValueTypes.find((def) => def.name === arg.replace('?', ''))?.desc));
    signature.documentation = "Function: " + hsFunction.desc;
    if (newStyle) {
        const concatenatedStrings = joinAndConcatWithIndex(hsFunction.args);
        const joinedArgs = concatenatedStrings.join(', ');
        signature.label = hsFunction.name + "(" + joinedArgs + ")";
    }
    else {
        const concatenatedStrings = joinAndConcatWithIndex(hsFunction.args);
        const joinedArgs = ' ' + concatenatedStrings.join(' ');
        signature.label = "(" + hsFunction.name + joinedArgs + ")";
    }
    return signature;
}
function countDelimitersBetweenParentheses(inputString, newStyle) {
    // Regular expression to match text within parentheses and count commas inside it
    let regex = /\(((?![A-Za-z\s]+\().*?)\)/g;
    if (newStyle) {
        regex = /\(([^)]*)\)/g;
    }
    let delimiterCount = 1;
    if (newStyle) {
        delimiterCount--;
    }
    // Find all matches of text within parentheses in the input string
    const matches = inputString.match(regex);
    if (matches) {
        // Iterate through the matches and count commas in each match
        for (const match of matches) {
            let delimterMatches = match.match(/\s+/g);
            if (newStyle) {
                delimterMatches = match.match(/,/g);
            }
            if (delimterMatches) {
                delimiterCount += delimterMatches.length;
            }
        }
    }
    return delimiterCount;
}
class hsProvider {
    provideSignatureHelp(document, position, token) {
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
        let delimiter = ' ';
        if (newStyle) {
            delimiter = ',';
        }
        const line = document.lineAt(position.line).text;
        let startIndex = -1;
        let endIndex = -1;
        let argIndex = 0;
        let skipOpenParenCount = 0;
        for (let i = position.character; i < line.length; i++) {
            if (line[i] === ')') {
                endIndex = i;
                break;
            }
            else if (line[i] === '(') {
                skipOpenParenCount++;
            }
        }
        if (endIndex === -1) {
            return;
        }
        for (let i = position.character - 1; i < line.length; i--) {
            if (line[i] === delimiter && line[i - 1] !== delimiter)
                argIndex++;
            if (line[i] === '(') {
                if (skipOpenParenCount > 0) {
                    skipOpenParenCount--;
                }
                else {
                    startIndex = i;
                    break;
                }
            }
            else if (line[i] === ')') {
                skipOpenParenCount++;
            }
        }
        if (startIndex === -1) {
            return;
        }
        let startPosition = new vscode.Position(position.line, startIndex);
        if (newStyle) {
            startPosition = new vscode.Position(position.line, startIndex + 1);
        }
        const endPosition = new vscode.Position(position.line, endIndex);
        const range = new vscode.Range(startPosition, endPosition);
        const selectedText = document.getText(range);
        // Get the text before the selected text
        const textBeforeSelection = line.slice(0, startIndex);
        // Use a regular expression to extract the first word
        let match = selectedText.match(/(?<=\()\w+/);
        if (newStyle) {
            match = textBeforeSelection.match(/[\w$]+$/);
        }
        if (match == null) {
            return null;
        }
        const functionName = match[0];
        const foundFunc = functions_1.hsFunctions.find((def) => def.name === functionName && def.games.includes(game));
        if (foundFunc == null) {
            return null;
        }
        const signatureHelp = new vscode.SignatureHelp();
        const ignoreDelimiters = countDelimitersBetweenParentheses(selectedText, newStyle);
        const realArgIndex = Math.max(argIndex - ignoreDelimiters, 0);
        signatureHelp.activeSignature = 0; // Index of the active signature
        signatureHelp.activeParameter = realArgIndex; // Index of the active parameter
        const signature = getSignatureInformation(foundFunc, realArgIndex, newStyle, game);
        // Add the signature to the SignatureHelp
        signatureHelp.signatures.push(signature);
        return signatureHelp;
    }
}
exports.hsProvider = hsProvider;
//# sourceMappingURL=signature.js.map