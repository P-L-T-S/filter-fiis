import { IStock } from './interfaces/IStock';
import { getURL } from '../utils/getURL';

export async function getStocksFromStatusInvest(site?: string) {
	const { list } = await getURL(site);

	const stocks: IStock[] = [];

	list.forEach((stock: IStock) => {
		stocks.push(stock);
	});

	return stocks;
}
