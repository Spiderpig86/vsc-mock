import { ICategory } from './category.interface';
import { displayPrompts } from '../consts/options';

export class Misc implements ICategory {
    public getCategoryName(): string {
        return 'misc';
    }

    public getTypes(): string[] {
        return [
            'coin',
            'dice',
            'guid',
            '.guid',
            'hash',
            '.hash',
            'normal',
            '.normal',
            'radio',
            '.radio',
            'rpg',
            'tv',
            '.tv'
        ];
    }

    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public async execHandlers(command: string): Promise<any> {

    }

    /* Custom options */
    public getDiceOpts(): string[] {
        return [
            '4',
            '6',
            '8',
            '10',
            '12',
            '20',
            '30',
            '100'
        ];
    }

    public async handleDice(chance: any): Promise<any> {
        const values =  await displayPrompts([
            'Enter number of die to roll',
            'Enter max val for each die',
            'Sum together values? (y/n)'
        ]);
        const val = (chance as any).rpg(`${values[0]}d${values[1]}`, { sum: values[2].toLowerCase() === 'y' });
        return val;
    }
}
