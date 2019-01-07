import { Chance } from 'chance';
import { ICategory } from './category.interface';

export class Person implements ICategory {

    private chance: any;

    constructor() {
        this.chance = Chance();
    }

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

    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public async execHandlers(command: string): Promise<any> {

    }
}
