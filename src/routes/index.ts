import { Router } from 'express';
import { Request, Response } from 'express';

import { filterStocks } from '../info_scraping/filterStocks';
import { scrapeStocks } from '../info_scraping/scrapeStocks';
import { getFunds } from '../utils/getFunds';
import { getStocksFromStatusInvest } from '../info_api/getStocksFromStatusInvest';
import { filterStocksFromStatusInvest } from '../info_api/filterStocksFromStatusInvest';

const router = Router();

router.get('/funds', async (req, res) => {
	const data = await getFunds();

	res.status(200).json(JSON.stringify(data));
});

router.get('/stocks/teste', async (req, res) => {
	const data = await getStocksFromStatusInvest('statusinvest');

	res.status(200).json(data);
});

router.post('/stocks/filter/teste', async (req: Request, res: Response) => {
	const { filters } = req.body;

	const data = await getStocksFromStatusInvest('statusinvest');

	let filteredStocks = data;

	filters.map((filter: any) => {
		filteredStocks = filterStocksFromStatusInvest(filteredStocks, filter);
	});

	filteredStocks.sort((a, b) => b.dy - a.dy);

	// const stocks = await scrapeStocks();

	// let filterdStocks = stocks;

	// filters.map((filter: any) => {
	// 	filterdStocks = filterStocks(filterdStocks, filter);
	// });

	res.status(200).send(JSON.stringify(filteredStocks));
});

router.get('/stocks', async (req: Request, res: Response) => {
	const funds = await scrapeStocks();

	res.status(200).send(JSON.stringify(funds));
});

router.post('/stocks/filter', async (req: Request, res: Response) => {
	const { filters } = req.body;

	const stocks = await scrapeStocks();

	let filterdStocks = stocks;

	filters.map((filter: any) => {
		filterdStocks = filterStocks(filterdStocks, filter);
	});

	res.status(200).send(JSON.stringify(filterdStocks));
});

export { router };
