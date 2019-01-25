import { Chance } from 'chance';
import * as vscode from 'vscode';

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
                return await this.handleDate();
            }
            case '.hour': {
                return await this.handleHour();
            }
            case '.weekday': {
                return await this.handleWeekday();
            }
            case '.year': {
                return await this.handleYear();
            }
            default: {
                vscode.window.showErrorMessage('Invalid command entered');
                return null;
            }
        }
    }

    public async handleDate(): Promise<any> {
        const values = await displayPrompts([
            'Use string variant of date (MM/DD/YYY)? (y/n)',
            'Use American date format? (y/n)',
            'Enter a year (eg. 1983, blank for random)'
        ]);
        const val = this.chance.date({
            ...values[0] && { string: values[0].toLowerCase() === 'y' },
            ...values[1] && { american: values[1].toLowerCase() === 'y' },
            ...values[2] && { year: Number(values[2]) },
        });
        return val;
    }

    public async handleHour(): Promise<any> {
        const values = await displayPrompts([
            'Use 24 hour format? (y/n)'
        ]);
        const val = this.chance.hour({
            ...values[0] && { twentyfour: values[0].toLowerCase() === 'y' },
        });
        return val;
    }

    public async handleWeekday(): Promise<any> {
        const values = await displayPrompts([
            'Show weekday only? (y/n)'
        ]);
        const val = this.chance.weekday({
            ...values[0] && { weekday_only: values[0].toLowerCase() === 'y' },
        });
        return val;
    }

    public async handleYear(): Promise<any> {
        const values = await displayPrompts([
            'Enter min year (eg. 1900 or blank for none)',
            'Enter max year (eg. 2100 or blank for none)'
        ]);
        const val = this.chance.year({
            ...values[0] && { min: values[0] },
            ...values[1] && { max: values[1] },
        });
        return val;
    }


}
