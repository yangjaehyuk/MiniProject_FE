import Header from 'components/GoodsDetail/Header';
import React from 'react';
import shop from '../../assets/images/shop.jpg';
import banner from '../../assets/images/banner.png';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

export default function GoodsDetail() {
	return (
		<div className="w-[769px] justify-center m-auto">
			<Header />
			<div className="relative mt-[48px] flex-row">
				<img src={shop} alt="숙소사진" className="w-[769px]" />
				<div>
					<span className="px-[20px] text-sm">일반 호텔</span>
          <div className='flex px-[20px] w-full justify-between'>
					<p className="text-title font-bold">호텔 아길라</p>
          <div className='flex space-x-4'>
          <FavoriteBorderIcon />
          <ShareIcon />

          </div>
          </div>
					<div className="flex items-center pt-[6px] px-[20px] pb-[2px]">
						<LocationOnIcon sx={{ fill: '#0152cc' }} />
						<span className="text-blue font-bold text-content">
							제주도에 위치
						</span>
            <KeyboardArrowRightIcon  sx={{ fill: '#0152cc' }}/>
					</div>
					<div className='flex items-center px-[20px]'>
						<StarIcon fontSize="small" sx={{ fill: '#FDBD00' }}/>
						4.5
					</div>
				</div>
				<img src={banner} alt="숙소사진" className="w-[728px] mx-auto rounded-md" />
				<div className='pt-[20px] px-[20px]'>
        <div className='min-h-[3rem] flex items-center'>
        <p className="text-title font-bold ">객실 선택</p>
        </div>
					{/* 모달들어갈 곳 */}
					{/* 객실아이템 */}
				</div>
				<div className='pt-[20px] px-[20px]'>
        <div className='min-h-[3rem] flex items-center'>
        <p className="text-title font-bold">위치/교통</p>
          </div>
					{/* 지도 */}
				</div>
				<div className='pt-[20px] px-[20px]'>
        <div className='min-h-[3rem] flex items-center'>
        <p className="text-title font-bold">숙소소개</p>
          </div>
					<p>제주국제공항에서 차로 32분거리에 위치하고 있습니다.</p>
				</div>
				<div className='pt-[20px] px-[20px]'>
        <div className='min-h-[3rem] flex items-center'>
					<p className="text-title font-bold">시실 및 서비스</p>
          </div>
					{/* 서비스 태그 들 */}
				</div>
				<div className='pt-[20px] px-[20px]'>
          <div className='min-h-[3rem] flex items-center'>
					<p className="text-title font-bold ">취소 안내</p>
          </div>
					<ul className='list-disc'>
            <li> 취소 밒 환불이 불가하 숙소 상품을 예약한 경우도 예약 완료 후 일정 시간 이내에 무료로 취소할 수 있습니다.</li>
            <li> &apos;취소불가&apos;로 표기되더라도 객실별 기본 정보의 취소규정이 &apos;취소가능&apos;으로 제공되는 경우 고객센터를 통해 취소 가능합니다.</li>
          </ul>
          <table className='min-w-full table-fixed border-collapse'>
            <thead>
            <tr className='bg-gray-100'>
              <th className="border p-4 text-left">상황</th>
              <th className="border p-4 text-left">무료 취소 가능 시간</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="border p-4">예약 완료 후 체크인 시간까지 10분 이상 남은 경우</td>
              <td className="border p-4">예약 완료 시점부터 10분 이내</td>
            </tr>
            <tr>
              <td className="border p-4">예약 완료 후 체크인 시간까지 10분 미만 남은 경우</td>
              <td className="border p-4">체크인 시간 전까지</td>
            </tr> 
            <tr>
              <td className="border p-4">체크인 시간 이후 예약 완료한 경우</td>
              <td className="border p-4">무료 취소 불가</td>
            </tr>
            </tbody>
          </table>
				</div>
			</div>
		</div>
	);
}
