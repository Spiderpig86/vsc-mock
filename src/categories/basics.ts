import { Chance } from 'chance';

import { ICategory } from './category.interface';
import { displayPrompts } from '../consts/options';

export class Basics implements ICategory {
    private chance: any;

    constructor() {
        this.chance = Chance();
    }

    public getCategoryName(): string {
        return 'basics';
    }

    public getTypes(): string[] {
        return [
            'bool',
            '.bool',
            'character',
            '.character',
            'floating',
            '.floating',
            'integer', 
            '.integer',
            'letter', 
            'natural',
            '.natural',
            'prime',
            '.prime',
            'string',
            '.string'
        ];
    }

    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public async execHandlers(command: string): Promise<any> {
        switch (command) {
            case '.bool': {
                return await this.handleBool(this.chance);
            }
            case '.character': {
                return await this.handleCharacter(this.chance);
            }
            case '.floating': {
                return await this.handleFloat(this.chance);
            }
            case '.integer': {
                return await this.handleInt(this.chance);
            }
            case '.natural': {
                return await this.handleNatural(this.chance);
            }
            case '.prime': {
                return await this.handlePrime(this.chance);
            }
            case '.string': {
                return await this.handleString(this.chance);
            }
            default: {
                console.log('No command found');
                return null;
            }
        }
    }

    /* Functions for handling options */
    public async handleBool(chance: any): Promise<any> {
        const values = await displayPrompts([
            'Enter likelihood for true (0-100)'
        ]);
        const val = chance.bool({ likelihood: Number(values[0]) });
        return val;
    }

    public async handleCharacter(chance: any): Promise<any> {
        const values = await displayPrompts([
            'Enter character pool (eg: \'abcde\', blank for all)',
            'Alphanumeric only? (y/n)',
            'Casing? (upper/lower/blank for default)',
            'Symbols only? (y/n)'
        ]);

        // Build options
        const val = chance.character({
            ...values[0] && { pool: values[0] },
            ...values[1] === 'y' && { alpha: true },
            ...values[2] && { casing: values[2] },
            ...values[3] === 'y' && { symbols: true }
        });
        return val;
    }

    public async handleFloat(chance: any): Promise<any> {
        const values = await displayPrompts([
            'Enter floating point preceision (eg: 7, blank for default)',
            'Enter min value (optional)',
            'Enter max value (optional)'
        ]);

        const val = chance.floating({
            ...values[0] && { fixed: values[0] },
            ...values[1] && { min: values[1] },
            ...values[2] && { max: values[2] }
        });
        return val;
    }

    public async handleInt(chance: any): Promise<any> {
        const values = await displayPrompts([
            'Enter min value (optional)',
            'Enter max value (optional)'
        ]);

        const val = chance.integer({
            ...values[0] && { min: values[0] },
            ...values[1] && { max: values[1] }
        });
        return val;
    }

    public async handleNatural(chance: any): Promise<any> {
        const values = await displayPrompts([
            'Enter min value (optional)',
            'Enter max value (optional)'
        ]);

        const val = chance.natural({
            ...values[0] && { min: values[0] },
            ...values[1] && { max: values[1] }
        });
        return val;
    }

    public async handlePrime(chance: any): Promise<any> {
        const values = await displayPrompts([
            'Enter min value (optional)',
            'Enter max value (optional)'
        ]);

        const val = chance.prime({
            ...values[0] && { min: values[0] },
            ...values[1] && { max: values[1] }
        });
        return val;
    }

    public async handleString(chance: any): Promise<any> {
        const values = await displayPrompts([
            'Enter length (eg: 5, blank for any)',
            'Enter character pool (eg: \'abcde\', blank for all)'
        ]);

        // Build options
        const val = chance.character({
            ...values[0] && { length: values[0] },
            ...values[1] && { pool: values[1] }
        });
        return val;
    }
}