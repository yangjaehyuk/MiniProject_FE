import React from 'react';
// import Header from 'components/myPage/Header';
import Inner from 'components/myPage/Inner';
import { requireLogin } from 'hooks/common/isAcessToken';
import CommonHeader from 'components/common/CommonHeader';
const MyPage = () => {
	requireLogin();
	return (
		<div className="min-h-screen bg-bgGray">
			<CommonHeader name="My 야놀자" isCartIcon />
			{/* <Header /> */}
			<Inner />
		</div>
	);
};

export default MyPage;
