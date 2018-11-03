import { ICategory } from './category.interface';

export class Person implements ICategory {
    public getCategoryName(): string {
        return 'person';
    }
    
    public getTypes(): string[] {
        return [
            'age',
            'birthday',
            'cf',
            'cpf',
            'first',
            'gender',
            'last',
            'name',
            'prefix',
            'ssn',
            'suffix'
        ];
    }
}
