/**
 * Base interface for categories of random text
 */
export interface ICategory {
    getCategoryName(): string;
    getTypes(): string[];
}