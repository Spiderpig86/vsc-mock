import { Chance } from 'chance';
import * as vscode from 'vscode';

import { ICategory } from './category.interface';
import { displayPrompts } from '../consts/options';

export class Thing implements ICategory {

    private chance: any;

    constructor() {
        this.chance = Chance();
    }

    public getCategoryName(): string {
        return 'thing';
    }

    public getTypes(): string[] {
        return [
            'animal',
            '.animal'
        ];
    }

    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public async execHandlers(command: string): Promise<any> {
        switch (command) {
            case '.animal': {
                return await this.handleAnimal();
            }
            default: {
                vscode.window.showErrorMessage('Invalid command entered');
                return null;
            }
        }
    }

    public async handleAnimal(): Promise<any> {
        const values = await displayPrompts([
            'Enter animal type (zoo/blank)'
        ]);
        const val = this.chance.animal({
            ...values[0] && { type: values[0] },
        });
        return val;
    }
}
