import express, { Request, Response } from 'express';
import cors from 'cors';
import { filterFunds } from './filterFunds';
import { getFunds } from './getFunds';
const server = express();

server.use(cors());

server.use(express.json());

server.get('/funds', async (req: Request, res: Response) => {
	const funds = await getFunds();

	res.status(200).send(JSON.stringify(funds));
});

server.post('/funds/filter', async (req: Request, res: Response) => {
	const { filters } = req.body;

	const funds = await getFunds();

	let filterdFunds = funds;

	filters.map((filter: any) => {
		filterdFunds = filterFunds(filterdFunds, filter);
	});

	res.status(200).send(JSON.stringify(filterdFunds));
});

server.listen(3030);
