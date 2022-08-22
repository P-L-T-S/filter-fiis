import { IFilters, IFund } from './interfaces';

export function filterFunds(funds: any[], filters: IFilters) {
	// formatar dados para comparação
	// converter string => number
	const formatInputs = (input: string) => {
		switch (filters.column) {
			case 'P_VPA':
				input = input.replace(/,/gm, '.');
				break;

			case 'DY_acumulado_12M_media':
				input = input.replace(/,/gm, '.');
				input = input.replace(/%/gm, '');
				break;

			case 'liquidez_diaria':
				input = input.replace(/\.\d/gm, '');
				break;

			case 'variacao_preco':
				input = input.replace(/,/gm, '.');
				input = input.replace(/%/gm, '');
				break;

			case 'preco_atual':
				input = input.replace('R$', '');
				input = input.replace(/,/gm, '.');
				break;

			default:
				break;
		}

		return Number(input);
	};

	const filteredFunds = funds.filter((fund) => {
		switch (filters.comparator) {
			case '=':
				return (
					formatInputs(fund[filters.column]) ==
					formatInputs(filters.value)
				);
			case '>':
				return (
					formatInputs(fund[filters.column]) >
					formatInputs(filters.value)
				);
			case '<':
				return (
					formatInputs(fund[filters.column]) <
					formatInputs(filters.value)
				);
			case '!=':
				return (
					formatInputs(fund[filters.column]) <
					formatInputs(filters.value)
				);
		}
	});
	return filteredFunds;
}
