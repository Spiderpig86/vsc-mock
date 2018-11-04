'use strict';
import * as vscode from 'vscode';
import { Chance } from 'chance';
import * as categories from './categories';

import { ICategory } from './categories/category.interface';

// Init options
const basics = new categories.Basics();
const finance = new categories.Finance();
const location = new categories.Location();
const misc = new categories.Misc();
const mobile = new categories.Mobile();
const person = new categories.Person();
const text = new categories.Text();
const thing = new categories.Thing();
const web = new categories.Web();

const chance = Chance();

/**
 * Initialize the extension data
 * 
 * @export
 * @param {vscode.ExtensionContext} context - vscode instance we are running from
 */
export function activate(context: vscode.ExtensionContext) {
    // chance.locale = vscode.workspace.getConfiguration('vscmock').get('locale'); // Set locale

    // Initialize category list
    let mockCategories: ICategory[] = [
        basics, finance, location, misc, mobile, person, text, thing, web
    ];

    // Register them as commands
    for (let cat of mockCategories) {
        context.subscriptions.push(vscode.commands.registerCommand(`mock.${cat.getCategoryName()}`, () => {
            execCmd(cat);
        }));
    }
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
    if (!editor) {
        throw new Error('VsCode editor instance not found.');
    }

    return editor;
}

/**
 * Insert text into the active editor window
 *
 * @param editor - current editor instance
 * @param text - text to insert
 */
function appendToEditor(editor: vscode.TextEditor, text: any): void {
    const position = editor.selection.active; // Get cursor position
    editor.edit(editBuilder => {
        editBuilder.insert(position, text);
    });
}

/**
 * Display option dropdown and run specified function based on category
 * 
 * @param {ICategory} cat - the category to display options from
 */
function execCmd(cat: ICategory): void {
    vscode.window
        .showQuickPick(cat.getTypes())
        .then((selectedType) => {
            const selected = unNullify(selectedType);

            // Abort on empty
            if (selected.length == 0) {
                return;
            }

            const val = (chance as any)[selected](); // Cast to any to avoid missing definition error


            appendToEditor(getEditor(), toString(val));
        }) ;
}

/* HELPERS */

/**
 * Transforms undefined to an empty string if needed
 * 
 * @param {(string | undefined)} str - the value that we need to convert
 * @returns {string} - transformed values
 */
function unNullify(str: string | undefined): string {
    return str || '';
}

/**
 * Gets the string value from an object if needed
 * 
 * @param {*} val 
 * @returns {String} 
 */
function toString(val: any): String {
    return (typeof val === 'object') ? JSON.stringify(val) : new String(val);
}