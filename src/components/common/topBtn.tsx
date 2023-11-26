import React from 'react';
import { upScroll } from 'utils';
import topSignal from '../../assets/images/top.svg';
import './TopBtnAnimation.css';

const TopBtn = ({ show }: any) => {
	const handleClick = () => {
		upScroll();
	};

	return (
		<div
			className={`fixed bottom-0 right-96 w-[44px] h-[44px] rounded-full bg-white flex justify-center items-center cursor-pointer border border-gray hover:bg-bgGray ${
				show ? 'animate-ToTopButton_show' : 'animate-ToTopButton_hide'
			}`}
			onClick={handleClick}
		>
			<img src={topSignal} alt="Top Signal" className="w-[19.8px] h-[10.6px]" />
		</div>
	);
};

export default TopBtn;
