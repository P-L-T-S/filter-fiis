import { IFilters } from './interfaces/IFilters';
import { IStock } from './interfaces/IStock';

export function filterStocksFromStatusInvest(
	stocks: IStock[],
	filters: IFilters
) {
	const filteredStocks = stocks.filter((stock) => {
		return teste(filters.comparator, stock);
	});

	function teste(comparador: IFilters['comparator'], stock: IStock) {
		const test = {
			'=': stock[filters.column] === filters.value,
			'>': stock[filters.column] >= filters.value,
			'<': stock[filters.column] <= filters.value,
			'!=': stock[filters.column] != filters.value,
		};

		return test[comparador];
	}

	return filteredStocks;
}
