import { ICategory } from './category.interface';

export class Web implements ICategory {
    public getCategoryName(): string {
        return 'web';
    }

    public getTypes(): string[] {
        return [
            'avatar',
            'color',
            'company',
            'domain',
            'email',
            'fbid',
            'google_analytics',
            'hashtag',
            'ip',
            'ipv6',
            'klout',
            'profession',
            'tld',
            'twitter',
            'url'
        ];
    }
}
