import Header from 'components/placeDetail/Header';
import React from 'react';
import shop from '../../assets/images/shop.jpg';
import banner from '../../assets/images/banner.png';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Footer from 'components/placeDetail/Footer';
import CheckIcon from '@mui/icons-material/Check';
import RoomItem from 'components/placeDetail/RoomItem';
import SoldOutRoomItem from 'components/placeDetail/SoldOutRoomItem';
import KakaoMap from 'components/placeDetail/KakaoMap';
import RoomIcon from '@mui/icons-material/Room';

export default function PlaceDetail() {
	return (
		<div className="justify-center m-auto text-content text-black">
			<Header />
			<div className="relative mt-[48px] flex-row">
				<img
					src={shop}
					alt="숙소사진"
					className="max-w-none w-[768px] h-[507px] -ml-5"
				/>
				<div className="pt-3">
					<span className="text-sm">일반 호텔</span>
					<div className="flex w-full justify-between">
						<p className="text-lg font-bold">호텔 아길라</p>
						<div className="flex space-x-4">
							<FavoriteBorderIcon fontSize="small" />
							<ShareIcon fontSize="small" />
						</div>
					</div>
					<div className="flex items-center pt-[6px] pb-[2px]">
						<LocationOnIcon sx={{ fill: '#0152cc' }} fontSize="small" />
						<span className="text-blue font-bold text-content">
							제주도에 위치
						</span>
						<KeyboardArrowRightIcon sx={{ fill: '#0152cc' }} />
					</div>
					<div className="flex items-center pt-[2px] font-bold">
						<StarIcon fontSize="small" sx={{ fill: '#FDBD00' }} />
						4.5
					</div>
				</div>
				<img
					src={banner}
					alt="숙소사진"
					className="w-[728px] mx-auto rounded-md pt-2"
				/>
				<div className="pt-5">
					<div className="min-h-[3rem] flex items-center">
						<p className="text-title font-bold ">객실 선택</p>
					</div>
					{/* 모달들어갈 곳 */}
					<div>달력</div>
					<RoomItem />
					<SoldOutRoomItem />
				</div>
				<div className="pt-5">
					<div className="min-h-[3rem] flex items-center">
						<p className="text-title font-bold">위치/교통</p>
					</div>
					<KakaoMap />
					<div className='flex items-center py-3'>
						<RoomIcon className='mr-1' sx={{ fill: '#cccccc', fontSize: '16px' }}/>
						<p>제주특별자치도 제주시 도령로 27</p>
					</div>
					<button className='w-full border border-gray py-[6px] rounded-sm text-sm hover:bg-bgGray'>주소복사</button>
				</div>
				<div className="pt-5">
					<div className="min-h-[3rem] flex items-center">
						<p className="text-title font-bold">숙소소개</p>
					</div>
					<p>제주국제공항에서 차로 32분거리에 위치하고 있습니다.</p>
				</div>
				<div className="pt-5">
					<div className="min-h-[3rem] flex items-center">
						<p className="text-title font-bold">시실 및 서비스</p>
					</div>
					<div className="grid grid-cols-4 gap-4">
						<div className="flex items-center">
							<CheckIcon />
							<span>주차가능</span>
						</div>
						<div className="flex items-center">
							<CheckIcon />
							<span>주차가능</span>
						</div>
						<div className="flex items-center">
							<CheckIcon />
							<span>주차가능</span>
						</div>
						<div className="flex items-center">
							<CheckIcon />
							<span>주차가능</span>
						</div>
						<div className="flex items-center">
							<CheckIcon />
							<span>주차가능</span>
						</div>
					</div>
				</div>
				<div className="py-5">
					<div className="min-h-[3rem] flex items-center">
						<p className="text-title font-bold ">취소 안내</p>
					</div>
					<ul className="list-disc">
						<li className="pb-2">
							{' '}
							취소 밒 환불이 불가하 숙소 상품을 예약한 경우도 예약 완료 후 일정
							시간 이내에 무료로 취소할 수 있습니다.
						</li>
						<li>
							{' '}
							&apos;취소불가&apos;로 표기되더라도 객실별 기본 정보의 취소규정이
							&apos;취소가능&apos;으로 제공되는 경우 고객센터를 통해 취소
							가능합니다.
						</li>
					</ul>
					<table className="min-w-full table-fixed border-collapse my-5">
						<thead className="bg-lightGray">
							<tr className="bg-lightGray">
								<th className="bg-lightGray border-lightGray px-4 py-2 text-left">
									상황
								</th>
								<th className="bg-lightGray border-lightGray px-4 py-2 text-left">
									무료 취소 가능 시간
								</th>
							</tr>
						</thead>
						<tbody className="text-textGray">
							<tr>
								<td className="border-lightGray border px-4 py-2">
									예약 완료 후 체크인 시간까지 10분 이상 남은 경우
								</td>
								<td className="border-lightGray border px-4 py-2">
									예약 완료 시점부터 10분 이내
								</td>
							</tr>
							<tr>
								<td className="border-lightGray border px-4 py-2">
									예약 완료 후 체크인 시간까지 10분 미만 남은 경우
								</td>
								<td className="border-lightGray border px-4 py-2">
									체크인 시간 전까지
								</td>
							</tr>
							<tr>
								<td className="border-lightGray border px-4 py-2">
									체크인 시간 이후 예약 완료한 경우
								</td>
								<td className="border-lightGray border px-4 py-2">
									무료 취소 불가
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<Footer />
			</div>
		</div>
	);
}
