import { ICategory } from './category.interface';

export class Person implements ICategory {
    public getCategoryName(): string {
        return 'person';
    }
    
    public getTypes(): string[] {
        return [
            'age',
            '.age',
            'birthday',
            '.birthday',
            'cf',
            '.cf',
            'cpf',
            'first',
            '.first',
            'gender',
            '.gender',
            'last',
            '.last',
            'name',
            '.name',
            'prefix',
            '.prefix',
            'ssn',
            '.ssn',
            'suffix',
            '.suffix'
        ];
    }
}
