import { NextFunction, Request, Response } from 'express';

export default function setHeader(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const setHeader = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
		'Content-Type': 'application/json',
	};
	res.header(setHeader);

	next();
}