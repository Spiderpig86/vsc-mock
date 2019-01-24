import { Chance } from 'chance';

import { ICategory } from './category.interface';
import { displayPrompts } from '../consts/options';

export class Finance implements ICategory {

    private chance: any;

    constructor() {
        this.chance = Chance();
    }

    public getCategoryName(): string {
        return 'finance';
    }

    public getTypes(): string[] {
        return [
            'cc',
            '.cc',
            'cc_type',
            '.cc_type',
            'currency',
            'currency_pair',
            'dollar',
            '.dollar',
            'euro',
            '.euro',
            'exp',
            '.exp',
            'exp_month',
            '.exp_month',
            'exp_year'
        ]
    }
    
    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public async execHandlers(command: string): Promise<any> {
        switch (command) {
            case '.cc': {
                return await this.handleCc();
            }
            case '.cc_type': {
                return await this.handleCcType();
            }
            case '.dollar': {
                return await this.handleDollar();
            }
            case '.euro': {
                return await this.handleEuro();
            }
            case '.exp': {
                return await this.handleExp();
            }
            case '.exp_month': {
                return await this.handleExpMonth();
            }
            default: {
                console.log('No command found');
                return null;
            }
        }
    }

    public async handleCc(): Promise<any> {
        const values = await displayPrompts([
            'Enter card type (eg. Mastercard or mc (short))'
        ]);
        const val = this.chance.cc({
            ...values[0] && { type: values[0] }
        });
        return val;
    }

    public async handleCcType(): Promise<any> {
        const values = await displayPrompts([
            'Return raw JSON object? (y/n)'
        ]);
        const val = this.chance.cc_type({
            ...values[0] && { raw: values[0].toLowerCase() === 'y' }
        });
        return val;
    }

    public async handleDollar(): Promise<any> {
        const values = await displayPrompts([
            'Enter max limit (eg. 250)'
        ]);
        const val = this.chance.dollar({
            ...values[0] && { max: Number(values[0]) }
        });
        return val;
    }

    public async handleEuro(): Promise<any> {
        const values = await displayPrompts([
            'Enter max limit (eg. 250)'
        ]);
        const val = this.chance.euro({
            ...values[0] && { max: Number(values[0]) }
        });
        return val;
    }

    public async handleExp(): Promise<any> {
        const values = await displayPrompts([
            'Return raw JSON object? (y/n)'
        ]);
        const val = this.chance.exp({
            ...values[0] && { raw: values[0].toLowerCase() === 'y' }
        });
        return val;
    }

    public async handleExpMonth(): Promise<any> {
        const values = await displayPrompts([
            'Use a future month? (y/n)'
        ]);
        const val = this.chance.exp_month({
            ...values[0] && { future: values[0].toLowerCase() === 'y' }
        });
        return val;
    }
}
