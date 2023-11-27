import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from 'utils';
import swal from 'sweetalert';

export const requireLogin = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const accessToken = getCookie('accessToken');

		if (!accessToken) {
			swal({ title: '로그인이 필요한 서비스입니다.', icon: 'warning' });
			navigate('/');
		}
	}, []);
};

export const alreadyLogin = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const accessToken = getCookie('accessToken');

		if (accessToken) {
			swal({ title: '이미 로그인 상태입니다.', icon: 'warning' });
			navigate('/');
		}
	}, []);
};
