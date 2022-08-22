export interface IFund {
	codigo: string;
	setor: string;
	preco_atual: string;
	liquidez_diaria: string;
	dividendo: string;
	DY: string;
	DY_acumulado_3M: string;
	DY_acumulado_6M: string;
	DY_acumulado_12M: string;
	DY_acumulado_3M_media: string;
	DY_acumulado_6M_media: string;
	DY_acumulado_12M_media: string;
	DY_ano: string;
	variacao_preco: string;
	rentabilidade_periodo: string;
	rentabilidade_acumulada: string;
	patrimonio_liquido: string;
	VPA: string;
	P_VPA: string;
	DY_patrimonial: string;
	variacao_patrimonial: string;
	rentabilidade_patrimonial_periodo: string;
	rentabilidade_patrimonial_acumulada: string;
	vacancia_fisica: string;
	vacancia_financeira: string;
	quantidade_ativos: string;
}

export interface IFilters {
	column: string;
	comparator: string;
	value: string;
}
