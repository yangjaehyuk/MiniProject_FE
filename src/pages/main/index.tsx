import React from 'react';
import Header from '../../components/main/Header';
import hotel from '../../assets/images/hotelImg.svg';
import pension from '../../assets/images/pensionImg.svg';
import poolVilla from '../../assets/images/poolVillaImg.svg';
import resort from '../../assets/images/resortImg.svg';
import carousel1 from '../../assets/images/carousel1.svg';
import carousel2 from '../../assets/images/carousel2.svg';
import carousel3 from '../../assets/images/carousel3.svg';
import item from '../../assets/images/item.svg';
import Benefits1 from '../../assets/images/Benefits1.svg';
import Benefits2 from '../../assets/images/Benefits2.svg';
import Benefits3 from '../../assets/images/Benefits3.svg';
import Benefits4 from '../../assets/images/Benefits4.svg';
import Benefits5 from '../../assets/images/Benefits5.svg';
import Benefits6 from '../../assets/images/Benefits6.svg';
import mainIcon1 from '../../assets/images/mainIcon1.svg';
import mainIcon2 from '../../assets/images/mainIcon2.svg';
import mainIcon3 from '../../assets/images/mainIcon3.svg';
import mainIcon4 from '../../assets/images/mainIcon4.svg';

import GoodsList from '../../components/main/GoodsList';
const main = () => {
	return (
		<>
			<Header />
			<div className="flex text-xxsm px-20 py-5 justify-between items-center pt-[56px]">
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={hotel} alt="Hotel" width={40} height={40} />
					<span> 호텔</span>
				</div>
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={resort} alt="resort" className="h-[48px]" />
					<span> 리조트</span>
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
			<div>캐러샐</div>
			<div className="my-3 flex ">
				<img
					src={carousel1}
					alt="carousel1"
					className="h-[110px] mr-4 rounded-md"
				/>
				<img
					src={carousel2}
					alt="carousel2"
					className="h-[110px] mr-4 rounded-md"
				/>
				<img
					src={carousel3}
					alt="carousel3"
					className="h-[110px] mr-4 rounded-md"
				/>
			</div>
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
				<div className="font-semibold">야놀자 추천 숙소</div>
				<GoodsList />
			</div>

			<div>
				<div className="flex justify-between items-center">
					<div className="font-semibold">크리스마스 호캉스 예약하기</div>
					<div className="font-semibold text-blue text-sm">전체 보기 </div>
				</div>
				<GoodsList />
			</div>

			<div>
				<div className="flex justify-between items-center">
					<div className="font-semibold">내가 관심 있을 만한 풀빌라</div>
					<div className="font-semibold text-blue text-sm">전체 보기 </div>
				</div>
				<GoodsList />
			</div>
			<div>
				<div className="flex justify-between items-center">
					<div className="font-semibold">선선한 가을 추천 리조트</div>
					<div className="font-semibold text-blue text-sm">전체 보기 </div>
				</div>
				<GoodsList />
			</div>
			<div>
				<div className="flex justify-between items-center">
					<div className="font-semibold">크리스마스 호캉스 예약하기</div>
					<div className="font-semibold text-blue text-sm">전체 보기 </div>
				</div>
				<GoodsList />
			</div>
			<div>
				<div className="font-semibold"> 지금 사랑받는 여행지</div>
				<div className="flex gap-4 mt-4 mb-8">
					<img src={item} alt="item" width={120} className="rounded-full" />
					<img src={item} alt="item" width={120} className="rounded-full" />
					<img src={item} alt="item" width={120} className="rounded-full" />
					<img src={item} alt="item" width={120} className="rounded-full" />
					<img src={item} alt="item" width={120} className="rounded-full" />
				</div>
			</div>
			<div>
				<div className="font-semibold"> 바로 받는 해택 모음</div>
				<div className=" flex justify-between my-6">
					<div className="flex flex-col gap-2">
						<img
							src={Benefits1}
							alt="Benefits1 "
							className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
						/>
						<img
							src={Benefits2}
							alt="Benefits2 "
							className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
						/>
						<img
							src={Benefits3}
							alt="Benefits3 "
							className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
						/>
					</div>

					<div className="flex flex-col gap-2">
						<img
							src={Benefits4}
							alt="Benefits4 "
							className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
						/>
						<img
							src={Benefits5}
							alt="Benefits5 "
							className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
						/>
						<img
							src={Benefits6}
							alt="Benefits6 "
							className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default main;
