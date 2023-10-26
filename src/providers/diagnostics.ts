import * as vscode from 'vscode';

let diagnosticCollection: vscode.DiagnosticCollection;

export function activate(context: vscode.ExtensionContext) {
    diagnosticCollection = vscode.languages.createDiagnosticCollection('unmatched-parentheses');

    // Register event listeners for document changes, opens, and closes
    vscode.workspace.onDidChangeTextDocument(event => {
        checkForUnmatchedParentheses(event.document);
    });

    vscode.workspace.onDidOpenTextDocument(document => {
        checkForUnmatchedParentheses(document);
    });

    vscode.workspace.onDidCloseTextDocument(document => {
        diagnosticCollection.delete(document.uri);
    });
}

function checkForUnmatchedParentheses(textDocument: vscode.TextDocument) {
    const newStyle = textDocument.languageId == "hsc4";
    const text = textDocument.getText();
    const diagnostics: vscode.Diagnostic[] = [];
    const stack: { char: string; position: number }[] = [];
    let inComment = false;
    if (newStyle)
    {
        for (let i = 0; i < text.length; i++) {
            if (text[i] === '/' && text[i + 1] === '/') {
                inComment = true;
            } else if (text[i] === '\n') {
                inComment = false;
            } else if (text[i] === '/' && text[i + 1] === '*') {
                inComment = true;
            } else if (text[i] === '*' && text[i + 1] === '/') {
                inComment = false;
            } else if (!inComment) {
                if (text[i] === '(') {
                    stack.push({ char: '(', position: i });
                } else if (text[i] === ')') {
                    if (stack.length === 0) {
                        diagnostics.push(new vscode.Diagnostic(
                            new vscode.Range(textDocument.positionAt(i), textDocument.positionAt(i + 1)),
                            'Unmatched closing parenthesis',
                            vscode.DiagnosticSeverity.Error
                        ));
                    } else {
                        stack.pop();
                    }
                }
            }
        }
    }
    else 
    {
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ';') {
                inComment = true;
            } else if (text[i] === '\n') {
                inComment = false;
            } else if (text[i] === ';' && text[i + 1] === '*') {
                inComment = true;
            } else if (text[i] === '*' && text[i + 1] === ';') {
                inComment = false;
            } else if (!inComment) {
                if (text[i] === '(') {
                    stack.push({ char: '(', position: i });
                } else if (text[i] === ')') {
                    if (stack.length === 0) {
                        diagnostics.push(new vscode.Diagnostic(
                            new vscode.Range(textDocument.positionAt(i), textDocument.positionAt(i + 1)),
                            'Unmatched closing parenthesis',
                            vscode.DiagnosticSeverity.Error
                        ));
                    } else {
                        stack.pop();
                    }
                }
            }
        }
    }

    diagnostics.push(...stack.map(item => {
        return new vscode.Diagnostic(
            new vscode.Range(textDocument.positionAt(item.position), textDocument.positionAt(item.position + 1)),
            'Unmatched opening parenthesis',
            vscode.DiagnosticSeverity.Error
        );
    }));

    diagnosticCollection.set(textDocument.uri, diagnostics);
}

export function deactivate() {
    if (diagnosticCollection) {
        diagnosticCollection.dispose();
    }
}
