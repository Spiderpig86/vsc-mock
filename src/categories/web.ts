import { ICategory } from './category.interface';

export class Web implements ICategory {
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
}
