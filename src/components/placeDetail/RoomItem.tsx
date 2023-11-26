import React from 'react';
import room from '../../assets/images/room.jpg';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ImageSwiper from 'components/common/ImageSwiper';
import { ImageItem } from 'types/ImageItem';
import RoomImageSwiper from 'components/common/RoomImageSwiper';
import { RoomDetailInfo, RoomProps } from 'types/Place';
import { useRecoilValue } from 'recoil';
import { capacityState } from 'recoil/atoms/capacityAtom';

export default function RoomItem({ roomItem }: RoomProps) {
	const capacityValue = useRecoilValue(capacityState);

	return (
		<div className="flex py-5 justify-between border-b border-borderGray cursor-pointer">
			<div>
				<div className="w-[320px] h-[160px] rounded-lg">
					<RoomImageSwiper items={roomItem.images} />
				</div>
				<p className="text-title text-black font-bold mt-3">{roomItem.name}</p>
				<div className="flex gap-x-0.5 text-secondaryTextGray mt-2">
					<PersonOutlineIcon fontSize="small" />
					<p>기준2인 / 최대 {roomItem.capacity}인</p>
				</div>
			</div>
			<div className="p-4 w-[386px] h-fit border-borderGray border rounded-lg">
				<div className="flex text-sm justify-between ">
					<span className="text-black font-semibold">숙박</span>
					<div className="flex items-center">
						<span className="text-blue font-bold ml-2">상세보기</span>
						<KeyboardArrowRightIcon
							sx={{ fill: '#0152cc', fontSize: '16px' }}
						/>
					</div>
				</div>
				<div>
					<p className="text-sm text-textGray py-1">
						체크인 <span className="font-semibold">15:00</span> ~ 체크아웃{' '}
						<span className="font-semibold">15:00</span>
					</p>
				</div>
				<div className="flex flex-col items-end">
					<div className="flex items-center">
						<p className="text-title font-bold text-black">
							{roomItem.price}원
						</p>
						<ErrorOutlineIcon sx={{ fontSize: '16px' }} />
					</div>

					{capacityValue <= roomItem.capacity ? (
						<div className="flex items-center">
							<p className="text-green text-sm font-bold ml-3">
								무료취소 (12.04 (월) 17:00전까지)
							</p>
							<KeyboardArrowRightIcon
								sx={{ fill: '#008161', fontSize: '16px' }}
							/>
						</div>
					) : (
						<div className="flex items-center">
							<p className="text-secondaryTextGray text-sm font-bold ml-3">
								무료취소 (12.04 (월) 17:00전까지)
							</p>
							<KeyboardArrowRightIcon
								sx={{ fill: '#616161', fontSize: '16px' }}
							/>
						</div>
					)}
				</div>
				{capacityValue <= roomItem.capacity ? (
					<div className="flex justify-between mt-3 items-center">
						<span className="text-orange text-sm font-bold">남은객실 {roomItem.stock}개</span>
						<div className="flex gap-x-2">
							<button className="border border-borderGray rounded w-[32px] h-[32px] cursor-pointer">
								<ShoppingCartOutlinedIcon fontSize="small" />
							</button>
							<button className="bg-secondary text-white rounded text-sm w-[120px] py-2 cursor-pointer hover:bg-hoverSecondary">
								예약하기
							</button>
						</div>
					</div>
				) : (
					<div className="flex flex-col items-end mt-3">
						<button className="bg-soldOut text-white w-[120px] rounded text-sm py-2">
							최대 인원 초과
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
