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
        const val = this.chance.age({
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
        const val = this.chance.birthday({
            ...values[0] && { type: values[0] },
            ...values[1] === 'y' && { string: true },
            ...values[2] === 'y' && { american: true },
            ...values[3] && { min: values[3] },
            ...values[4] && { max: values[4] }
        });
        return val;
    }

    public async handleCf(command: string): Promise<any> {
        const values = await displayPrompts([
            'Enter first name (optional)',
            'Enter last name (optional)',
            'Enter gender (male/female/blank)',
            'Enter code, eg "h501" (optional)'
        ]);
        const val = this.chance.cf({
            ...values[0] && { first: values[0] },
            ...values[1] && { last: values[1] },
            ...values[2] && { gender: values[2] },
            ...values[3] && { city: values[3] },
        });
        return val;
    }

    public async handleFirst(command: string): Promise<any> {
        const values = await displayPrompts([
            'Enter nationality (us/it)',
            'Enter gender (male/female)'
        ]);
        const val = this.chance.first({
            ...values[0] && { nationality: values[0] },
            ...values[1] && { gender: values[1] }
        });
        return val;
    }

    public async handleGender(command: string): Promise<any> {
        const values = await displayPrompts([
            'Enter extra genders (comma separated)'
        ]);
        const val = this.chance.gender({
            ...values[0] && { extraGenders: values[0] }
        });
        return val;
    }

    public async handleLast(command: string): Promise<any> {
        const values = await displayPrompts([
            'Enter nationality (us/it)'
        ]);
        const val = this.chance.last({
            ...values[0] && { nationality: values[0] }
        });
        return val;
    }

    public async handleCf(command: string): Promise<any> {
        const values = await displayPrompts([
            'Use middle name? (y/n)',
            'Use middle initial? (y/n)',
            'Use prefix? (y/n)',
            'Enter nationality (en/it)'
        ]);
        const val = this.chance.cf({
            ...values[0] && { middle: true },
            ...values[1] && { middle_initial: true },
            ...values[2] && { prefix: true },
            ...values[3] && { nationality: values[3] },
        });
        return val;
    }

    public async handlePrefix(command: string): Promise<any> {
        const values = await displayPrompts([
            'Use full prefix? (y/n)',
            'Enter gender (male/female)'
        ]);
        const val = this.chance.prefix({
            ...values[0] === 'y' && { full: true },
            ...values[1] && { gender: values[1] },
        });
        return val;
    }

    public async handleSsn(command: string): Promise<any> {
        const values = await displayPrompts([
            'Only show 4 digits? (y/n)',
            'Show dashes? (y/n)',
        ]);
        const val = this.chance.ssn({
            ...values[0] === 'y' && { ssnFour: true },
            ...values[1] === 'y' && { dashes: true }
        });
        return val;
    }

    public async handleSuffix(command: string): Promise<any> {
        const values = await displayPrompts([
            'Use full suffix? (y/n)'
        ]);
        const val = this.chance.suffix({
            ...values[0] === 'y' && { full: true }
        });
        return val;
    }

}
