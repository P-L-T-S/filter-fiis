export interface IStock {
	codigo: string;
	setor: string;
	score: string;
	DY: string;
	PL: string;
	margem_liquida: string;
	cagr_receita: string;
	cagr_lucro: string;
	'div_liq/ebitda': string;
}

export interface IStockDTO {
	codigo: string;
	setor: string;
	score: number;
	DY: number;
	PL: number;
	margem_liquida: number;
	cagr_receita: number;
	cagr_lucro: number;
	'div_liq/ebitda': number;
}
