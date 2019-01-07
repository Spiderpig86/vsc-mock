import { Chance } from 'chance';
import { ICategory } from './category.interface';

export class Web implements ICategory {

    private chance: any;

    constructor() {
        this.chance = Chance();
    }

    public getCategoryName(): string {
        return 'web';
    }

    public getTypes(): string[] {
        return [
            'avatar',
            '.avatar',
            'color',
            '.color',
            'company',
            'domain',
            '.domain',
            'email',
            '.email',
            'fbid',
            'google_analytics',
            'hashtag',
            'ip',
            'ipv6',
            'klout',
            'profession',
            '.profession',
            'tld',
            'twitter',
            'url',
            '.url'
        ];
    }

    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public async execHandlers(command: string): Promise<any> {

    }
}
