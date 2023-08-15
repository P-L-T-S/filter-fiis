import { IStock } from './IStock';

export interface IFilters {
	column: keyof IStock;
	comparator: '=' | '>' | '<' | '!=';
	value: string;
}
