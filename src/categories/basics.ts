import { ICategory } from './category.interface';

export class Basics implements ICategory {
    public getCategoryName(): string {
        return 'basics';
    }

    public getTypes(): string[] {
        return [
            'bool',
            'boolargs',
            'character',
            'characterargs',
            'floating',
            'floatingargs',
            'integer', 
            'integerargs',
            'letter', 
            'natural',
            'naturalargs',
            'prime',
            'primeargs',
            'string',
            'stringargs'
        ];
    }
}