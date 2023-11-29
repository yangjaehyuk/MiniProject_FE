import React, { useEffect, useState } from 'react';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { dataCartItem, CartItem } from 'types/Cart.type';
import { useRecoilValue } from 'recoil';
import { cartItemState, totalPriceState } from 'recoil/atoms/cartAtom';
import { orderItemState } from 'recoil/atoms/orderAtom';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { formatFullDateRange } from 'utils/formatDate';
import { getDateDifference } from 'hooks/common/getDateDifference';
import { getDayOfWeek } from 'hooks/common/getDayOfWeek';
import { formatNumberWithCommas } from 'utils/numberComma';

const ReservationItem = () => {
	const cartItem = useRecoilValue(cartItemState);
	const totalPrice = useRecoilValue(totalPriceState);

	// 상세 페이지 -> 결제하기
	const orderItem = useRecoilValue(orderItemState);
	const checkInDate = useRecoilValue(checkInDateState);
	const checkOutDate = useRecoilValue(checkOutDateState);

	const checkDate = formatFullDateRange(checkInDate, checkOutDate);

	// 데이터에서 필요한 부분을 추출
	const checkIn = checkDate.split('~')[0];
	const checkOut = checkDate.split('~')[1].split(',')[0].trim();
	const nights = checkDate.split('~')[1].split(',')[1].trim();

	return (
		<>
			{orderItem ? (
				<>
					<div key={orderItem.id}>
						<div className="my-4">
							<div className="font-semibold ">
								{orderItem.accommodationName}
							</div>
							<div className="font-semibold text-content ">
								{orderItem.roomTypeName}
							</div>
						</div>
						<div className="flex ">
							<div className="flex flex-col w-1/2">
								<div className="text-xxsm text-textGray">체크인</div>
								<div className="font-semibold text-content ">{checkIn}</div>
								<div className="text-sm">15: 00</div>
							</div>
							<div className="flex flex-col w-1/2 ">
								<div className="text-xxsm text-textGray">체크아웃</div>
								<div className="font-semibold text-content ">{checkOut}</div>
								<div className="text-sm">19: 00</div>
							</div>
						</div>
						<div className="text-xxsm text-textGray flex items-center py-2">
							<PersonOutlineRoundedIcon sx={{ fontSize: '1rem' }} /> 기준 2명 /
							최대
							{orderItem.capacity}명
						</div>
						<div>
							<div className="flex justify-end items-center content-center">
								<div className="text-sm text-textGray pr-1">
									연박 / {nights}
								</div>
								<div className="font-semibold text-content">
									{formatNumberWithCommas(orderItem.price)} 원
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					{cartItem.map((item) => (
						<div key={item.id}>
							<div className="my-4">
								<div className="font-semibold ">{item.accommodation.name}</div>
								<div className="font-semibold text-content ">
									{item.roomType.name}
								</div>
							</div>
							<div className="flex ">
								<div className="flex flex-col w-1/2">
									<div className="text-xxsm text-textGray">체크인</div>
									<div className="font-semibold text-content ">
										{item.checkinDate}({getDayOfWeek(item.checkinDate)})
									</div>
									<div className="text-sm">15: 00</div>
								</div>
								<div className="flex flex-col w-1/2 ">
									<div className="text-xxsm text-textGray">체크아웃</div>
									<div className="font-semibold text-content ">
										{item.checkoutDate} ({getDayOfWeek(item.checkoutDate)})
									</div>
									<div className="text-sm">19: 00</div>
								</div>
							</div>
							<div className="text-xxsm text-textGray flex items-center py-2">
								<PersonOutlineRoundedIcon sx={{ fontSize: '1rem' }} /> 기준 2명
								/ 최대
								{item.roomType.capacity}명
							</div>
							<div>
								<div className="flex justify-end items-center content-center">
									<div className="text-sm text-textGray pr-1">
										연박 /{' '}
										{getDateDifference(item.checkinDate, item.checkoutDate)} 박
									</div>
									<div className="font-semibold text-content">
										{formatNumberWithCommas(item.roomType.price)} 원
									</div>
								</div>
							</div>
						</div>
					))}
					<div className="flex justify-end items-center content-center">
						<div className="font-semibold ">
							{' '}
							총 {formatNumberWithCommas(totalPrice)} 원
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default ReservationItem;
