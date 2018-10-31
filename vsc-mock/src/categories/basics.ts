import { ICategory } from './category.interface';

export class Basics implements ICategory {
    public getCategoryName(): string {
        return 'basics';
    }

    public getTypes(): string[] {
        return [
            'bool',
            'character', 
            'floating', 
            'integer', 
            'letter', 
            'natural', 
            'prime', 
            'string'
        ];
    }
}