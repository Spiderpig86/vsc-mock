import { Chance } from 'chance';

import { ICategory } from './category.interface';
import { displayPrompts } from '../consts/options';

export class Thing implements ICategory {

    private chance: any;

    constructor() {
        this.chance = Chance();
    }

    public getCategoryName(): string {
        return 'thing';
    }

    public getTypes(): string[] {
        return [
            'animal',
            '.animal'
        ];
    }

    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public async execHandlers(command: string): Promise<any> {
        switch (command) {
            case '.animal': {
                return await this.handleAnimal();
            }
            default: {
                console.log('No command found');
                return null;
            }
        }
    }

    public async handleAnimal(): Promise<any> {
        const values = await displayPrompts([
            'Enter animal type (zoo/blank)'
        ]);
        const val = this.chance.birthday({
            ...values[0] && { type: values[0] },
            ...values[1] && { string: values[1].toLowerCase() === 'y' },
            ...values[2] && { american: values[2].toLowerCase() === 'y' },
            ...values[3] && { min: values[3] },
            ...values[4] && { max: values[4] }
        });
        return val;
    }
}
