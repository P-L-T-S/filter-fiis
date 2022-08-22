# Filtro de FII's
Programa para coleta de informações e filtro de ativos de Fundos de Investimento Imobiliários (FII's).

## Como Usar

## Baixar o programa

```
git clone https://github.com/P-L-T-S/filter-fiis
```

### Instalar as dependências
```
npm install 
```

## Informações filtradas no momento

### Colunas:

- P_VPA;

- DY ( dividend yield ) acumulado nos últimos 12 meses;

- Liquidez diária;

- Variação do preço;

- Preço atual;

### Comparadores:

- \> ( maior que );

- < ( menor que );

- = ( igual à );

- ! ( diferente de );

## Exemplo:

```
{
	"filters": [
		{
			"column": "P_VPA",
			"comparator": "<",
			"value": "1,00"
		},
		{
			"column": "DY_acumulado_12M_media",
			"comparator": ">",
			"value": "0,60%"
		},
		{
			"column": "liquidez_diaria",
			"comparator": ">",
			"value": "5500"
		},
		{
			"column": "variacao_preco",
			"comparator": ">",
			"value": "6,5%"
		},
		{
			"column": "preco_atual",
			"comparator": "<",
			"value": "R$100,00"
		}
	]
}
```

## Formato do retorno

A saída é feita em uma lista de objetos.

### Lista de fundos
```
[
	{
		"codigo": "RECT11",
		"setor": "Híbrido",
		"preco_atual": "R$63,00",
		"liquidez_diaria": "10279.0",
		"dividendo": "R$0,50",
		"DY": "0,83%",
		"DY_acumulado_3M": "2,56%",
		"DY_acumulado_6M": "4,87%",
		"DY_acumulado_12M": "9,31%",
		"DY_acumulado_3M_media": "0,85%",
		"DY_acumulado_6M_media": "0,81%",
		"DY_acumulado_12M_media": "0,78%",
		"DY_ano": "5,62%",
		"variacao_preco": "6,64%",
		"rentabilidade_periodo": "7,53%",
		"rentabilidade_acumulada": "-8,53%",
		"patrimonio_liquido": "R$806.023.791,96",
		"VPA": "R$94,34",
		"P_VPA": "0,67",
		"DY_patrimonial": "0,53%",
		"variacao_patrimonial": "-2,01%",
		"rentabilidade_patrimonial_periodo": "-1,48%",
		"rentabilidade_patrimonial_acumulada": "0,19%",
		"vacancia_fisica": "15,10%",
		"vacancia_financeira": "N/A",
		"quantidade_ativos": "8"
	}
]
```

## Como funciona

1. Existem duas rotas: _/funds_ e _/funds/filter_.
1. Ambas as rotas acessam https://www.fundsexplorer.com.br/ranking para buscar os dados e formata as informações.
1. A rota _/funds_ retorna os dados de forma bruta, já _/funds/filter_ faz a filtragem de acordo com os parametros enviados.
1. Os dados são enviados através de uma lista de objetos.