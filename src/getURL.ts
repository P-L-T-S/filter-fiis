import axios from 'axios';

export async function getURL() {
	const url = 'https://www.fundsexplorer.com.br/ranking';

	const { data } = await axios.get(url);

	return data;
}
