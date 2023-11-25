import axios from 'axios';
import { SERVER_URL } from './constants';

const instance = axios.create({
	baseURL: SERVER_URL,
	headers: {
		Accept: 'application/json',
	},
});

export const fetchSeoul = async () => {
	try {
		const res = axios.get(`${SERVER_URL}/accommodations`, {
			params: {
				region: 'SEOUL',
			},
		});
	} catch (error) {
		console.error('fetchSeoul 데이터 받아오기 실패:', error);
		return null;
	}
};

export default instance;
