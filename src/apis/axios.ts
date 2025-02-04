import axios from 'axios';
import { SERVER_URL } from './constants';
import { getCookie } from 'utils';
import { myOrder } from 'types/myPage.type';

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
	return res.data.data;
};

export const getUserInfo = async () => {
	const res = await instance.get('members/mypage');
	return res.data.data;
};

export const getUserOrderInfo = async () => {
	const res = await instance.get<myOrder>('members/orders');
	return res.data;
};
export default instance;
