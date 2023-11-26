import axios from 'axios';
import { SERVER_URL } from './constants';
import { getCookie } from 'utils';

const instance = axios.create({
	baseURL: SERVER_URL,
	headers: {
		Accept: 'application/json',
	},
});

instance.interceptors.request.use(
	(config) => {
		const accessToken = getCookie('accessToken');
		if (accessToken) {
			config.headers['Authorization'] = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export const postJoin = async (
	email: string,
	password: string,
	name: string,
) => {
	const res = await instance.post('members/signup', {
		email: email,
		password: password,
		name: name,
	});
	return res.data;
};

export const postLogin = async (email: string, password: string) => {
	const res = await instance.post('members/login', {
		email: email,
		password: password,
	});
	return res.data;
};

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
