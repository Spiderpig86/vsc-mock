import { ICategory } from './category.interface';

export class Finance implements ICategory {
    public getCategoryName(): string {
        return 'finance';
    }

    public getTypes(): string[] {
        return [
            'cc',
            'cc_type',
            'currency',
            'currency_pair',
            'dollar',
            'euro',
            'exp',
            'exp_month',
            'exp_year'
        ]
    }
}
