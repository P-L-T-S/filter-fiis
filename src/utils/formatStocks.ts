import { IStock, IStockDTO } from '../info_scraping/interfaces/IStock';

function removePercentageAndParsoToFloat(text: string) {
	return parseFloat(text.replace('%', '')) || 0;
}

export function formatStocks(stock: IStock) {
	const stockDTO: Partial<IStockDTO> = {
		codigo: stock.codigo,
		setor: stock.setor,
	};

	const scorePoints = stock.score.replace(/\D/g, '');
	stockDTO.score = Number(scorePoints);

	stockDTO.DY = removePercentageAndParsoToFloat(stock.DY);

	stockDTO.PL = parseFloat(stock.PL);

	stockDTO.margem_liquida = removePercentageAndParsoToFloat(
		stock.margem_liquida
	);

	stockDTO.cagr_receita = removePercentageAndParsoToFloat(stock.cagr_receita);

	stockDTO.cagr_lucro = removePercentageAndParsoToFloat(stock.cagr_lucro);

	stockDTO['div_liq/ebitda'] = removePercentageAndParsoToFloat(
		stock['div_liq/ebitda']
	);

	return stockDTO;
}
