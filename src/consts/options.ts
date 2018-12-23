/**
 * Stores the list of commands
 */
import * as vscode from 'vscode';
import { unNullify } from '../extension';

export const COMMAND_OPTS: Array<string> = [
    'dice',
    'rpg'
];

// TODO: Figure out how to handle default args

/**
 * Handle list of user prompts
 *
 * @export
 * @param {string[]} prompts - list of prompts for given command
 * @returns {Promise<string[]>}
 */
export async function displayPrompts(prompts: string[]): Promise<string[]> {
    const resultList: string[] = [];
    
    // Prompt for each statement
    for (const prompt of prompts) {
        const val = await vscode.window.showInputBox({ placeHolder: prompt });
        const res = unNullify(val);
        resultList.push(res);
    }

    return resultList;

}