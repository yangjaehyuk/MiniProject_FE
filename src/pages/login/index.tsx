import React, { useEffect } from 'react';
import Header from 'components/login/Header';
import Inner from 'components/login/Inner';
import { getCookie } from 'utils';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
const Login = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const accessToken = getCookie('accessToken');
		if (accessToken) {
			swal({ title: '로그인 상태입니다.', icon: 'warning' });
			navigate('/');
		}
	}, []);
	return (
		<div className="min-h-screen bg-bgGray">
			<Header />
			<Inner />
		</div>
	);
};

export default Login;
