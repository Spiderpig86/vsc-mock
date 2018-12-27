import { ICategory } from './category.interface';

export class Misc implements ICategory {
    public getCategoryName(): string {
        return 'misc';
    }

    public getTypes(): string[] {
        return [
            'coin',
            'dice',
            'guid',
            '.guid',
            'hash',
            '.hash',
            'normal',
            '.normal',
            'radio',
            '.radio',
            'rpg',
            'tv',
            '.tv'
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
