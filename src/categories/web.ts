import { Chance } from 'chance';
import { ICategory } from './category.interface';

import { displayPrompts } from '../consts/options';

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
        switch (command) {
            case '.avatar': {
                return await this.handleAvatar();
            }
            case '.color': {
                return await this.handleParagraph();
            }
            case '.domain': {
                return await this.handleParagraph();
            }
            case '.email': {
                return await this.handleParagraph();
            }
            case '.profession': {
                return await this.handleParagraph();
            }
            case '.url': {
                return await this.handleParagraph();
            }
            default: {
                console.log('No command found');
                return null;
            }
        }
    }

    /* Functions for handling options */
    public async handleAvatar(): Promise<any> {
        const values = await displayPrompts([
            'Enter protocol (eg. https, http, etc)',
            'Enter preferred file extension (eg. jpg)',
            'Enter email address for Gravatar'
        ]);
        const val = this.chance.avatar({
            ...values[0] && { protocol: values[0] },
            ...values[1] && { fileExtension: values[1] },
            ...values[2] && { email: values[2] }
        });
        return val;
    }

    public async handleColor(): Promise<any> {
        const values = await displayPrompts([
            'Specify format of the color (hex/shorthex/rgb/0x)',
            'Grayscale the color? (y/n)',
            'Specify casing for color (upper/lower)'
        ]);
        const val = this.chance.color({
            ...values[0] && { protocol: values[0] },
            ...values[1] && { grayscale: values[1].toLowerCase() === 'y' },
            ...values[2] && { casing: values[2] }
        });
        return val;
    }
}
