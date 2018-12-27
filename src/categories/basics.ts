import { ICategory } from './category.interface';

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
}