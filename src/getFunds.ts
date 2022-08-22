import cherrio from 'cheerio';
import { getURL } from './getURL';
import { formatFunds } from './utils/formatFunds';

export async function getFunds() {
	const funds = <any>[];
	
	const data = await getURL();

	const $ = cherrio.load(data);

	$('#table-ranking tbody tr').each((index, row) => {
		var newRow = $(row).text().replace(/\n/gm, '_');

		const fund = formatFunds(newRow);
		funds.push(fund);
	});

	return funds;
}
