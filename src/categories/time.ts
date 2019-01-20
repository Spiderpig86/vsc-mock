import { Chance } from 'chance';

import { ICategory } from './category.interface';
import { displayPrompts } from '../consts/options';

export class Time implements ICategory {

    private chance: any;

    constructor() {
        this.chance = Chance();
    }

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

    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public async execHandlers(command: string): Promise<any> {
        switch (command) {
            case '.date': {
                
            }
            case '.date': {
                
            }
            case '.date': {
                
            }
            case '.date': {
                
            }
            case '.date': {
                
            }
            case '.date': {
                
            }
            case '.date': {
                
            }
            case '.date': {
                
            }
            case '.date': {
                
            }
            default: {

            }
        }
    }

    public async handleDate(): Promise<any> {
        const values = await displayPrompts([
            'Use string variant of date (MM/DD/YYY)? (y/n)',
            'Use American date format? (y/n)',
            'Enter a year (eg. 1983, blank for random)'
        ]);
        const val = this.chance.coordinates({
            ...values[0] && { string: values[0].toLowerCase() === 'y' },
            ...values[1] && { american: values[1].toLowerCase() === 'y' },
            ...values[2] && { year: Number(values[2]) },
        });
        return val;
    }

    public async handleHour(): Promise<any> {
        const values = await displayPrompts([
            'Use string variant of date (MM/DD/YYY)? (y/n)',
            'Use American date format? (y/n)',
            'Enter a year (eg. 1983, blank for random)'
        ]);
        const val = this.chance.coordinates({
            ...values[0] && { string: values[0].toLowerCase() === 'y' },
            ...values[1] && { american: values[1].toLowerCase() === 'y' },
            ...values[2] && { year: Number(values[2]) },
        });
        return val;
    }
}
