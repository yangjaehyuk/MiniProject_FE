import React, { useEffect } from 'react';
import Header from 'components/myPage/Header';
import Inner from 'components/myPage/Inner';
import { useNavigate } from 'react-router-dom';
import { getCookie } from 'utils';
import swal from 'sweetalert';
const MyPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const accessToken = getCookie('accessToken');
		if (!accessToken) {
			swal({ title: '로그인이 필요한 서비스입니다.', icon: 'warning' });
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

export default MyPage;
