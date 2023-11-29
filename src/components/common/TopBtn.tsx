import React from 'react';
import { upScroll } from 'utils';
import topSignal from '../../assets/images/top.svg';
import './TopBtnAnimation.css';
import styles from './Common.module.css';

const TopBtn = ({
	show,
	isOverlap = false,
}: {
	show: boolean;
	isOverlap?: boolean;
}) => {
	const handleClick = () => {
		upScroll();
	};

	return (
		<div
			className={`${styles.topBtn} ${
				show ? 'animate-ToTopButton_show' : 'animate-ToTopButton_hide'
			} ${isOverlap ? 'bottom-32' : 'bottom-4'}`}
			onClick={handleClick}
		>
			<img src={topSignal} alt="Top Signal" className="w-[19.8px] h-[10.6px]" />
		</div>
	);
};

export default TopBtn;
