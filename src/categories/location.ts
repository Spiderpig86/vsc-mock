import { ICategory } from './category.interface';

export class Location implements ICategory {
    public getCategoryName(): string {
        return 'location';
    }

    public getTypes(): string[] {
        return [
            'address',
            '.address',
            'altitude',
            '.altitude',
            'areacode',
            'city',
            'coordinates',
            '.coordinates',
            'country',
            '.country',
            'depth',
            '.depth',
            'geohash',
            '.geohash',
            'latitude',
            '.latitude',
            'longitude',
            '.longitude',
            'phone',
            '.phone',
            'postal',
            'postalcode',
            'province',
            '.province',
            'state',
            '.state',
            'street',
            '.street',
            'zip',
            '.zip',
        ];
    }
}
