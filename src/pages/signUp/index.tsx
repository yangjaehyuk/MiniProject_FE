import React from 'react';
// import Header from 'components/signUp/Header';
import Inner from 'components/signUp/Inner';
import CommonHeader from 'components/common/CommonHeader';
const SignUp = () => {
	return (
		<div className="min-h-screen bg-bgGray">
			<CommonHeader name="회원가입" />
			{/* <Header /> */}
			<Inner />
		</div>
	);
};

export default SignUp;
