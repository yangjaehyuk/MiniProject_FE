import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import CheckIcon from '@mui/icons-material/Check';
import room from '../../assets/images/room.jpg';
import Header from 'components/roomDetail/Header';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Footer from 'components/roomDetail/Footer';
import ImageSwiper from 'components/common/ImageSwiper';
import { ImageItem } from 'types/ImageItem';

export default function RoomDetail() {
	return (
		<div className="justify-center m-auto text-content text-black">
			<Header />
			<div className="relative mt-[48px] flex-row">
				{/* <img
					src={room}
					alt="숙소사진"
					className="max-w-none w-[768px] h-[507px] -ml-5"
				/> */}
				<div className="max-w-none w-full h-[507px]">
					<ImageSwiper items={ImageItem} />
				</div>
				<div className="pt-3">
					<div className="flex w-full justify-between">
						<div>
							<p className="text-lg font-bold text-black">스탠다드 트윈</p>
							<p className="text-content">초특가★</p>
						</div>
						<ShareIcon fontSize="small" />
					</div>

					<div className="mt-[13px]">
						<p className="text-sm">
							베스턴 웨스턴 제주{' '}
							<KeyboardArrowRightIcon sx={{ fontSize: '14px' }} />
						</p>
					</div>
				</div>

				<div className="py-3 flex flex-col gap-y-[0.6px]">
					<div className="flex gap-x-0.5 text-secondaryTextGray mt-2">
						<PersonOutlineIcon fontSize="small" />
						<p>기준2인 / 최대 4인</p>
					</div>
					<div className="flex gap-x-0.5 text-secondaryTextGray mt-2">
						<SmokeFreeIcon fontSize="small" />
						<p>금연 객실</p>
					</div>
				</div>
				<div className="pt-4 pb-3">
					<div className="min-h-[3rem] flex items-center">
						<p className="text-content font-bold">주요 서비스 및 편의시설</p>
					</div>
					<div className="grid grid-cols-4 gap-4 text-secondaryTextGray">
						<div className="flex items-center ">
							<CheckIcon sx={{ fontSize: '16px' }} />
							<span className="pl-1">무료 와이파이</span>
						</div>
						<div className="flex items-center">
							<CheckIcon sx={{ fontSize: '16px' }} />
							<span className="pl-1">주차가능</span>
						</div>
						<div className="flex items-center">
							<CheckIcon sx={{ fontSize: '16px' }} />
							<span className="pl-1">주차가능</span>
						</div>
						<div className="flex items-center">
							<CheckIcon sx={{ fontSize: '16px' }} />
							<span className="pl-1">주차가능</span>
						</div>
						<div className="flex items-center">
							<CheckIcon sx={{ fontSize: '16px' }} />
							<span className="pl-1">주차가능</span>
						</div>
					</div>
				</div>
				<div className="border border-borderGray p-4 rounded-lg">
					<div>
						<span className="text-sm text-black font-bold">숙박</span>
						<p className="text-sm text-textGray py-1">
							체크인 <span className="font-semibold">15:00</span> ~ 체크아웃{' '}
							<span className="font-semibold">15:00</span>
						</p>
					</div>
					<div className="flex flex-col items-end">
						<div className="flex items-center">
							<p className="text-title font-bold text-black">76,200원</p>
							<ErrorOutlineIcon sx={{ fontSize: '16px' }} />
						</div>
						<div className="flex items-center">
							<p className="text-green text-sm font-bold ml-3">
								무료취소 (12.07 (목) 17:00전까지)
							</p>
							<KeyboardArrowRightIcon
								sx={{ fill: '#008161', fontSize: '16px' }}
							/>
						</div>
					</div>
				</div>
				<div className="pt-5">
					<p className="text-title text-black font-bold">취소 수수료</p>
					<table className="min-w-full table-fixed border-collapse my-5">
						<thead className="bg-lightGray">
							<tr className="bg-lightGray">
								<th className="bg-lightGray border-lightGray px-4 py-2 text-left">
									기간
								</th>
								<th className="bg-lightGray border-lightGray px-4 py-2 text-left">
									취소수수료율
								</th>
							</tr>
						</thead>
						<tbody className="text-textGray">
							<tr>
								<td className="border-lightGray border px-4 py-2">
									12.07 17:00전까지
								</td>
								<td className="border-lightGray border px-4 py-2">
									총 판매가의 0%
								</td>
							</tr>
							<tr>
								<td className="border-lightGray border px-4 py-2">
									12.07 17:00전까지
								</td>
								<td className="border-lightGray border px-4 py-2">
									총 판매가의 30%
								</td>
							</tr>
							<tr>
								<td className="border-lightGray border px-4 py-2">
									12.07 17:00전까지
								</td>
								<td className="border-lightGray border px-4 py-2">
									총 판매가의 50%
								</td>
							</tr>
							<tr>
								<td className="border-lightGray border px-4 py-2">
									12.07 17:00전까지
								</td>
								<td className="border-lightGray border px-4 py-2">
									총 판매가의 100%
								</td>
							</tr>
							<tr>
								<td className="border-lightGray border px-4 py-2">
									12.07 17:00전까지
								</td>
								<td className="border-lightGray border px-4 py-2">
									취소 및 환불 불가
								</td>
							</tr>
						</tbody>
					</table>
					<ul className="list-disc my-2 pb-[70px]">
						<li className="pb-2">
							{' '}
							연박(2일 이상의 숙박) 예약 시, 예약하신 각 투숙일 별 최소
							수수료율이 차등 적용됩니다.
						</li>
						<li className="pb-2">
							{' '}
							일부 숙박시설은 해당 숙박시설의 취소ㆍ환불 정책이 적용됩니다.
							반드시 각 기간별 취소수수료 발생 여부를 확인하시고 예약
							부탁드립니다.
						</li>
						<li className="pb-2">
							{' '}
							취소 규정은 입실일(체크인 일자) 기준으로 적용됩니다.
						</li>
						<li className="pb-2">
							{' '}
							취소수수료는 쿠폰 및 포인트와 같은 할인금액을 제외하지 아니한 전체
							예약 금액을 기준으로 계산됩니다.
						</li>
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
}
