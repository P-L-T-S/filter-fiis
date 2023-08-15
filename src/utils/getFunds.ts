import axios from 'axios';
import { METHODS } from 'http';

const url = 'https://www.fundsexplorer.com.br/wp-json/funds/v1/get-ranking';

export async function getFunds() {
	const { data } = await axios.request({
		headers: {
			Host: 'www.fundsexplorer.com.br',
			'User-Agent':
				'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0',
			Accept: 'application/json, text/plain, */*',
			'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
			'Accept-Encoding': 'gzip, deflate, br',
			allow: 'GET',
			'Content-Type': 'application/json; charset=UTF-8',
			Referer: 'https://www.fundsexplorer.com.br/ranking',
			'x-funds-nonce':
				'61495f60b533cc40ad822e054998a3190ea9bca0d94791a1da',
			'Alt-Used': 'www.fundsexplorer.com.br',
			Connection: 'keep-alive',
			Cookie: 'popup=popup-funds.com; __cf_bm=Iq6_Nkp5dKXGZmUebGdcIk0suO_.da8uKauDQcMnUko-1689295146-0-AYS9Q3YHfUEdPZTfDrDTRNe0IuBIhLUcCNXuCVLYzrHDY7xjgKXsUnkvRoiT35pP4w==',
			'Sec-Fetch-Dest': 'empty',
			'Sec-Fetch-Mode': 'cors',
			'Sec-Fetch-Site': 'same-origin',
			'Sec-GPC': '1',
			TE: 'trailers',
			'Transfer-Encoding': 'chunked',
		},
		method: 'GET',
		url,
	});

	return data;
}
