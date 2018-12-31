import { ICategory } from './category.interface';
import { displayPrompts } from '../consts/options';

export class Basics implements ICategory {
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

    /* Functions for handling options */
    public async handleBool(chance: any): Promise<any> {
        const values =  await displayPrompts([
            'Enter likelihood for true (0-100)'
        ]);
        const val = chance.bool({ likelihood: Number(values[0]) });
        return val;
    }
}