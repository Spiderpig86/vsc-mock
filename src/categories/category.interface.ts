/**
 * Base interface for categories of random text
 */
export interface ICategory {
    getCategoryName(): string;
    getTypes(): string[];
    getOptCommands(): string[];
    execHandlers(command: string): Promise<any>;
}