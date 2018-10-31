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
            'hash',
            'normal',
            'radio',
            'rpg',
            'tv'
        ];
    }
}
