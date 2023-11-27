import React from 'react';
import Header from 'components/myPage/Header';
import Inner from 'components/myPage/Inner';
import { requireLogin } from 'hooks/common/isAcessToken';
const MyPage = () => {
	requireLogin();
	return (
		<div className="min-h-screen bg-bgGray">
			<Header />
			<Inner />
		</div>
	);
};

export default MyPage;
