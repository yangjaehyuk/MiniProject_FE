import React, { useCallback, useState } from 'react';
import Header from '../../components/main/Header';
import hotel from '../../assets/images/hotelImg.svg';
import pension from '../../assets/images/pensionImg.svg';
import poolVilla from '../../assets/images/poolVillaImg.svg';
import resort from '../../assets/images/resortImg.svg';

import item from '../../assets/images/item.png';

import mainIcon1 from '../../assets/images/mainIcon1.svg';
import mainIcon2 from '../../assets/images/mainIcon2.svg';
import mainIcon3 from '../../assets/images/mainIcon3.svg';
import mainIcon4 from '../../assets/images/mainIcon4.svg';

import GoodsList from '../../components/main/GoodsList';
import Sider from 'components/main/Sider';
import MainFooter from 'components/Footer/MainFooter';
import MainCarousel from 'components/main/MainCarousel';
// import RegionItem from 'components/region/RegionItem';
// import MainRegionItem from 'components/main/MainRegionItem';

// import { getSeoulDate } from '../../hooks/main/useQueryMainRegion';
import MainRegionList from 'components/main/MainRegionList';
// import { useQuery } from 'react-query';

import TopBtn from 'components/common/TopBtn';
import useScrollToShow from 'hooks/common/handleScroll';
import BenefitsInfo from 'components/main/BenefitsInfo';
import SiderRegions from 'components/main/SiderRegions';

const main = () => {
	const [isOpen, setIsOpen] = useState(false);

	// const { data, isLoading } = useQuery('SEOUL', getSeoulDate);

	const handleDrawerOpen = useCallback(() => {
		setIsOpen(true);
	}, []);

	const handleDrawerClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	const show = useScrollToShow(false, 200);

	return (
		<div className={isOpen ? 'h-screen overflow-hidden' : ''}>
			<Header handleOpen={handleDrawerOpen} />
			<div className="flex text-xxsm px-20 py-5 justify-between items-center pt-24">
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={hotel} alt="Hotel" width={40} height={40} />
					<span> 호텔</span>
				</div>
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={resort} alt="resort" className="h-[48px]" />
					<span> 리조트 </span>
				</div>
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={pension} alt="pension" className="h-[48px]" />
					<span> 펜션</span>
				</div>
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={poolVilla} alt="poolVilla" className="h-[40px]" />
					<span> 풀빌라</span>
				</div>
			</div>

			<MainCarousel />
			<div className="flex text-xxsm px-20 py-5 mb-4 justify-between items-center">
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={mainIcon1} alt="mainIcon1" width={30} />
					<span> 매일응모하기</span>
				</div>
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={mainIcon2} alt="mainIcon2" width={30} />
					<span> 숙박권받기</span>
				</div>
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={mainIcon3} alt="mainIcon3" width={30} />
					<span> 최대8만혜택</span>
				</div>
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={mainIcon4} alt="mainIcon4" width={30} />
					<span> 결제할인모음</span>
				</div>
			</div>
			<div>
				{/* <div className="font-semibold">야놀자 추천 숙소</div> */}
				<GoodsList type={'PENSION'} title="야놀자 추천 숙소" />
			</div>

			<div>
				{/* <div className="flex justify-between items-center">
					<div className="font-semibold">크리스마스 호캉스 예약하기</div>
					<div className="font-semibold text-blue text-sm">전체 보기 </div>
				</div> */}
				<GoodsList type={'HOTEL'} title="크리스마스 호캉스 예약하기" />
			</div>

			<MainRegionList />

			<div>
				{/* <div className="flex justify-between items-center">
					<div className="font-semibold">내가 관심 있을 만한 풀빌라</div>
					<div className="font-semibold text-blue text-sm">전체 보기 </div>
				</div> */}
				<GoodsList type={'POOL_VILLA'} title="내가 관심 있을 만한 풀빌라" />
			</div>
			<div>
				{/* <div className="flex justify-between items-center">
					<div className="font-semibold">선선한 가을 추천 리조트</div>
					<div className="font-semibold text-blue text-sm">전체 보기 </div>
				</div> */}
				<GoodsList type={'RESORT'} title="선선한 가을 추천 리조트" />
			</div>

			<div>
				<div className="font-semibold"> 지금 사랑받는 여행지</div>
				<div className="py-6">
					<SiderRegions isMain />
				</div>
				{/* <div className="flex gap-4 mt-4 mb-8">
					<img src={item} alt="item" width={120} className="rounded-full" />
					<img src={item} alt="item" width={120} className="rounded-full" />
					<img src={item} alt="item" width={120} className="rounded-full" />
					<img src={item} alt="item" width={120} className="rounded-full" />
					<img src={item} alt="item" width={120} className="rounded-full" />
				</div> */}
			</div>
			<BenefitsInfo />
			{/* 사이드바 추가 */}
			<Sider isOpen={isOpen} handleClose={handleDrawerClose} />
			{show && <TopBtn show={show} />}

			<MainFooter></MainFooter>
		</div>
	);
};

export default main;
