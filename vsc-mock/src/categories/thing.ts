import { ICategory } from './category.interface';

export class Thing implements ICategory {
    public getCategoryName(): string {
        return 'thing';
    }

    public getTypes(): string[] {
        return [
            'animal'
        ];
    }
}
