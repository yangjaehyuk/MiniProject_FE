import Header from 'components/GoodsDetail/Header';
import React from 'react';
import shop from '../../assets/images/shop.jpg';
import banner from '../../assets/images/banner.png';
import StarIcon from '@mui/icons-material/Star';

export default function GoodsDetail() {
	return (
		<div className="w-[769px] justify-center m-auto">
			<Header />
			<div className="relative mt-[48px] flex-row">
				<img src={shop} alt="숙소사진" className="w-[769px]" />
				<div>
					<span className="pt-1.5 pr-8 pb-0">일반 호텔</span>
					<p className='text-title font-bold'>호텔 아길라</p>
					<p>제주도에 위치</p>
					<div>
						<StarIcon />
						4.5
					</div>
				</div>
        <img src={banner} alt="숙소사진" className="w-[728px] mx-auto" />
        <div>
        <p className='text-title font-bold'>객실 선택</p>
        {/* 모달들어갈 곳 */}
        {/* 객실아이템 */}
        </div>
        <div>
        <p className='text-title font-bold'>위치/교통</p>
        {/* 지도 */}
        </div>
        <div>
        <p className='text-title font-bold'>숙소소개</p>
        {/* 숙소 소개 */}
        </div>
        <div>
        <p className='text-title font-bold'>시실 및 서비스</p>
        {/* 서비스 태그 들 */}
        </div>
        <div>
        <p className='text-title font-bold'>취소 안내</p>
        {/* 서비스 태그 들 */}
        </div>
			</div>
		</div>
	);
}
