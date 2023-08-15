import { load } from 'cheerio';
import { getURL } from '../utils/getURL';
import { formatStocks } from '../utils/formatStocks';
import { EColumns } from './enums/EColumns';
import { IStock, IStockDTO } from './interfaces/IStock';

export async function scrapeStocks(site?: string) {
	const stocks: IStockDTO[] = [];

	const data = await getURL(site);

	const doc = load(data);

	doc('table.table tbody tr').each((index, row) => {
		let stock: Partial<IStock> = {};

		row.children.forEach((col, idxCol) => {
			const columnValue = doc(col).text();

			const currentColumn = EColumns[idxCol];

			stock[currentColumn] = columnValue;
		});

		const stockDTO = formatStocks(stock as IStock);

		stocks.push(stockDTO as IStockDTO);
	});

	return stocks;
}
