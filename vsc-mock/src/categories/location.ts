import { ICategory } from './category.interface';

export class Location implements ICategory {
    public getCategoryName(): string {
        return 'location';
    }

    public getTypes(): string[] {
        return [
            'address',
            'altitude',
            'areacode',
            'city',
            'coordinates',
            'country',
            'depth',
            'geohash',
            'latitude',
            'longitude',
            'phone',
            'postal',
            'province',
            'state',
            'street',
            'zip'
        ];
    }
}
