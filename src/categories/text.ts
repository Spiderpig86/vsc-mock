import { Chance } from 'chance';
import * as vscode from 'vscode';

import { ICategory } from './category.interface';
import { displayPrompts } from '../consts/options';

export class Text implements ICategory {

    private chance: any;

    constructor() {
        this.chance = Chance();
    }

    public getCategoryName(): string {
        return 'text';
    }

    public getTypes(): string[] {
        return [
            'paragraph',
            '.paragraph',
            'sentence',
            '.sentence',
            'syllable',
            'word',
            '.word'
        ];
    }

    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public async execHandlers(command: string): Promise<any> {
        switch (command) {
            case '.paragraph': {
                return await this.handleParagraph(this.chance);
            }
            case '.sentence': {
                return await this.handleSentence(this.chance);
            }
            case '.word': {
                return await this.handleWord(this.chance);
            }
            default: {
                vscode.window.showErrorMessage('Invalid command entered');
                return null;
            }
        }
    }

    /* Functions for handling options */
    public async handleParagraph(chance: any): Promise<any> {
        const values = await displayPrompts([
            'Enter number of sentences (or blank for default)'
        ]);
        const val = chance.paragraph({
            ...values[0] && { sentences: Number(values[0]) }
        });
        return val;
    }

    public async handleSentence(chance: any): Promise<any> {
        const values = await displayPrompts([
            'Enter number of words (or blank for default)'
        ]);
        const val = chance.sentence({
            ...values[0] && { words: Number(values[0]) }
        });
        return val;
    }

    public async handleWord(chance: any): Promise<any> {
        const values = await displayPrompts([
            'Enter number of letters (optional)',
            'Enter number of syllables (optional)'
        ]);
        const val = chance.word({
            ...values[0] && { length: Number(values[0]) },
            ...values[1] && { syllables: Number(values[1]) }
        });
        return val;
    }
}
