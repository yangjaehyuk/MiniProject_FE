import React from 'react';
import Header from 'components/login/Header';
import Inner from 'components/login/Inner';
import { alreadyLogin } from 'hooks/common/isAcessToken';
const Login = () => {
	alreadyLogin();
	return (
		<div className="min-h-screen bg-bgGray">
			<Header />
			<Inner />
		</div>
	);
};

export default Login;
