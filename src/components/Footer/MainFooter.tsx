import React from 'react';
import logo from '../../assets/images/yanolja_gray.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import naverblog from '../../assets/images/naverblog.svg';
import naverpost from '../../assets/images/naverpost.svg';
import youtube from '../../assets/images/youtube.svg';
import award07 from '../../assets/images/award-07.svg';
import award08 from '../../assets/images/award-08.svg';
import award09 from '../../assets/images/award-09.svg';
import award10 from '../../assets/images/award-10.svg';
import award11 from '../../assets/images/award-11.svg';
import award12 from '../../assets/images/award-12.svg';
import award13 from '../../assets/images/award-13.svg';

const MainFooter = () => {
	return (
		<div className="bg-bgGray pt-[20px] pb-8 text-xs -m-5 px-4">
			<div className="flex">
				<img src={logo} alt="logo" />
			</div>

			<div className="pt-[20px] text-textGray">
				<p className="pt-1">
					객실 사진의 경우 객실별 대표사진으로 실제 배정받는 객실과 상의할 수
					있습니다.
				</p>
				<p className="pt-1">
					(주)야놀자는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의
					예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
				</p>
				<p className="pt-1">
					숙박업소는 법적으로 청소년 고용과 혼숙이 금지되어 있습니다. 따라서
					청소년 혼숙으로 인한 입실거부는 정당하며, 이에 대한 법적 제재는 이용
					당사자가 책임져야 합니다.
				</p>
			</div>
		</div>
	);
};

export default MainFooter;
