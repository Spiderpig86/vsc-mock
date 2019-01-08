import { Chance } from 'chance';

import { ICategory } from './category.interface';
import { displayPrompts } from '../consts/options';

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
        switch (command) {
            case '.age': {
                return await this.handleAge(this.chance);
            }
            case '.birthday': {
                return await this.handleBirthday(this.chance);
            }
            case '.cf': {
                return await this.handleCf(this.chance);
            }
            case '.first': {
                return await this.handleFirst(this.chance);
            }
            case '.gender': {
                return await this.handleGender(this.chance);
            }
            case '.last': {
                return await this.handleLast(this.chance);
            }
            case '.name': {
                return await this.handleName(this.chance);
            }
            case '.prefix': {
                return await this.handlePrefix(this.chance);
            }
            case '.ssn': {
                return await this.handleSsn(this.chance);
            }
            case '.suffix': {
                return await this.handleSuffix(this.chance);
            }
            default: {
                console.log('No command found');
                return null;
            }
        }
    }

    /* Custom functions */
    public async handleAge(command: string): Promise<any> {
        const values = await displayPrompts([
            'Enter age type (child/teen/adult/senior/blank)'
        ]);
        const val = this.chance.paragraph({
            ...values[0] && { type: values[0] }
        });
        return val;
    }

    public async handleBirthday(command: string): Promise<any> {
        const values = await displayPrompts([
            'Enter age type (child/teen/adult/senior/blank)',
            'Use string format? (y/n)',
            'American date format? (y/n)',
            'Minimum year? (optional)?',
            'Maximum year? (optional)?'
        ]);
        const val = this.chance.paragraph({
            ...values[0] && { type: values[0] },
            ...values[1] && { string: values[1] },
            ...values[2] && { american: values[2] },
            ...values[3] && { min: values[3] },
            ...values[4] && { max: values[4] }
        });
        return val;
    }


}
