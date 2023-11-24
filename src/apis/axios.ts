import axios from 'axios';
import { SERVER_URL } from './constants';

const instance = axios.create({
	baseURL: SERVER_URL,
	headers: {
		Accept: 'application/json',
	},
});

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
export default instance;
