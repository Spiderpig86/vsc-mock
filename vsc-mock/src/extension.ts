'use strict';
import * as vscode from 'vscode';
import * as chance from 'chance';

/**
 * Initialize the extension data
 * 
 * @export
 * @param {vscode.ExtensionContext} context - vscode instance we are running from
 */
export function activate(context: vscode.ExtensionContext) {
    chance.locale = vscode.workspace.getConfiguration('vscmock').get('locale'); // Set locale

    // Initialize category list
}

/**
 * Deactivate the extension
 * 
 * @export
 */
export function deactivate() {}

/**
 * Get the current active editor instance
 *
 * @returns {vscode.TextEditor}
 */
function getEditor(): vscode.TextEditor {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    return editor;
}

/**
 * Insert text into the active editor window
 *
 * @param editor - current editor instance
 * @param text - text to insert
 */
function appendToEditor(editor: vscode.TextEditor, text: string): void {
    const position = editor.selection.active; // Get cursor position
    editor.edit(editBuilder => {
        editBuilder.insert(position, text);
    });
}
