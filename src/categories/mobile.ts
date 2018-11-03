import { ICategory } from './category.interface';

export class Mobile implements ICategory {
    public getCategoryName(): string {
        return 'mobile';
    }

    public getTypes(): string[] {
        return [
            'android_id',
            'apple_token',
            'bb_pin',
            'wp7_anid',
            'wp8_anid2'
        ];
    }
}