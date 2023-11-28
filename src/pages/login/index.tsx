import React from 'react';
// import Header from 'components/login/Header';
import Inner from 'components/login/Inner';
import { alreadyLogin } from 'hooks/common/isAcessToken';
import CommonHeader from 'components/common/CommonHeader';
const Login = () => {
	alreadyLogin();
	return (
		<div className="min-h-screen bg-bgGray">
			<CommonHeader name="이메일로 로그인" />
			{/* <Header /> */}
			<Inner />
		</div>
	);
};

export default Login;
