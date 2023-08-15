import { IStock } from './../interfaces/IStock';

export const EColumns = {
	[0 as number]: 'codigo' as keyof IStock,
	[1 as number]: 'setor' as keyof IStock,
	[2 as number]: 'score' as keyof IStock,
	[3 as number]: 'DY' as keyof IStock,
	[4 as number]: 'PL' as keyof IStock,
	[5 as number]: 'margem_liquida' as keyof IStock,
	[6 as number]: 'cagr_receita' as keyof IStock,
	[7 as number]: 'cagr_lucro' as keyof IStock,
	[8 as number]: 'div_liq/ebitda' as keyof IStock,
};
