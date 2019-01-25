import { Chance } from 'chance';
import { ICategory } from './category.interface';
import { displayPrompts } from '../consts/options';

export class Misc implements ICategory {

    private chance: any;

    constructor() {
        this.chance = Chance();
    }

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
        switch (command) {
            case '.guid': {

                break;
            }
            case '.hash': {

                break;
            }
            case '.normal': {

                break;
            }
            case '.radio': {

                break;
            }
            case '.tv': {

                break;
            }
        }
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

    public async handleGuid(): Promise<any> {
        const values =  await displayPrompts([
            'Enter version number (eg. 4, 5 is default)'
        ]);
        const val = this.chance.guid({
            ...values[0] && { version: Number(values[0]) }
        });
        return val;
    }

    public async handleNormal(): Promise<any> {
        const values =  await displayPrompts([
            'Enter mean value (eg. 100)',
            'Enter standar deviation (eg. 15)'
        ]);
        const val = this.chance.normal({
            ...values[0] && { mean: Number(values[0]) },
            ...values[1] && { dev: Number(values[0]) }
        });
        return val;
    }

    public async handleRadio(): Promise<any> {
        const values =  await displayPrompts([
            'Enter side (east/west)'
        ]);
        const val = this.chance.radio({
            ...values[0] && { side: values[0] },
        });
        return val;
    }

    public async handleRpg(): Promise<any> {
        const values =  await displayPrompts([
            'Enter number of die to roll',
            'Enter max val for each die',
            'Sum together values? (y/n)'
        ]);
        const val = this.chance.rpg(`${values[0]}d${values[1]}`, { sum: values[2].toLowerCase() === 'y' });
        return val;
    }

    public async handleTv(): Promise<any> {
        const values =  await displayPrompts([
            'Enter side (east/west)'
        ]);
        const val = this.chance.tv({
            ...values[0] && { side: values[0] },
        });
        return val;
    }
}
