import { ICategory } from './category.interface';

export class Text implements ICategory {
    public getCategoryName(): string {
        return 'text';
    }

    public getTypes(): string[] {
        return [
            'paragraph',
            'paragraphargs',
            'sentence',
            'sentenceargs',
            'syllable',
            'word',
            'wordargs'
        ];
    }
}
