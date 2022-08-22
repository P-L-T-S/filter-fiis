import { IFund } from '../interfaces';

const columns = [
	'codigo',
	'setor',
	'preco_atual',
	'liquidez_diaria',
	'dividendo',
	'DY',
	'DY_acumulado_3M',
	'DY_acumulado_6M',
	'DY_acumulado_12M',
	'DY_acumulado_3M_media',
	'DY_acumulado_6M_media',
	'DY_acumulado_12M_media',
	'DY_ano',
	'variacao_preco',
	'rentabilidade_periodo',
	'rentabilidade_acumulada',
	'patrimonio_liquido',
	'VPA',
	'P_VPA',
	'DY_patrimonial',
	'variacao_patrimonial',
	'rentabilidade_patrimonial_periodo',
	'rentabilidade_patrimonial_acumulada',
	'vacancia_fisica',
	'vacancia_financeira',
	'quantidade_ativos',
];

export function formatFunds(newrow: any) {
	let newRow = newrow;

	newRow = newRow.replace(/\s/gm, '');

	newRow = newRow.replace(/__/gm, '_');

	newRow = newRow.replace(/^_|_$/gm, '');

	const fundArr = newRow.split('_');

	let fundToObjectArray: any = {};

	const fund = fundArr.reduce(
		(value: IFund, valueAtaual: any, index: number) => {
			fundToObjectArray[columns[index]] = valueAtaual;

			value = fundToObjectArray;

			return value;
		},
		{}
	);

	return fund;
}
