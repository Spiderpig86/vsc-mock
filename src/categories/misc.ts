import { ICategory } from './category.interface';

export class Misc implements ICategory {
    public getCategoryName(): string {
        return 'misc';
    }

    public getTypes(): string[] {
        return [
            'coin',
            'dice', // Need params
            'guid',
            'hash',
            'normal',
            'radio',
            'rpg', // Need params
            'tv'
        ];
    }

    /* Custom options */
    public getDiceOpts(): string[] {
        return [
            '4',
            '6',
            '8',
            '10',
            '12',
            '20',
            '30',
            '100'
        ];
    }
}
