import { ICategory } from './category.interface';

export class Time implements ICategory {
    public getCategoryName(): string {
        return 'time';
    }
    
    public getTypes(): string[] {
        return [
            'ampm',
            'date',
            '.date',
            'hammertime',
            'hour',
            '.hour',
            'millisecond',
            'minute',
            'second',
            'timestamp',
            'timezone',
            'weekday',
            '.weekday',
            'year',
            '.year'
        ];
    }
}