import { ICategory } from './category.interface';

export class Thing implements ICategory {
    public getCategoryName(): string {
        return 'thing';
    }

    public getTypes(): string[] {
        return [
            'animal',
            '.animal'
        ];
    }

    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public async execHandlers(command: string): Promise<any> {

    }
}
