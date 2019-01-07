import { ICategory } from './category.interface';

export class Text implements ICategory {
    public getCategoryName(): string {
        return 'text';
    }

    public getTypes(): string[] {
        return [
            'paragraph',
            '.paragraph',
            'sentence',
            '.sentence',
            'syllable',
            'word',
            '.word'
        ];
    }

    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public execHandlers(command: string): Promise<any> {

    }
}
