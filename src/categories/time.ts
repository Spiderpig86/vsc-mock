import { Chance } from 'chance';
import { ICategory } from './category.interface';

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

    }
}
