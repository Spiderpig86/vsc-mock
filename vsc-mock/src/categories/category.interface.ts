/**
 * Base interface for categories of random text
 */
export interface Category {
    getItemName(): string;
    getTypes(): string[];
}