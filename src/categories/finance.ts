import { ICategory } from './category.interface';

export class Finance implements ICategory {
    public getCategoryName(): string {
        return 'finance';
    }

    public getTypes(): string[] {
        return [
            'cc',
            '.cc',
            'cc_type',
            '.cc_type',
            'currency',
            'currency_pair',
            'dollar',
            '.dollar',
            'euro',
            '.euro',
            'exp',
            '.exp',
            'exp_month',
            '.exp_month',
            'exp_year'
        ]
    }
}
