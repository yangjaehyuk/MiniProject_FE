import React, { useEffect, useState } from 'react';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { dataCartItem, CartItem } from 'types/Cart.type';
import { useRecoilValue } from 'recoil';
import { cartItemState, totalPriceState } from 'recoil/atoms/cartAtom';
import { orderItemState } from 'recoil/atoms/orderAtom';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';

const ReservationItem = () => {
	const cartItem = useRecoilValue(cartItemState);
	const totalPrice = useRecoilValue(totalPriceState);

	// 상세 페이지 -> 결제하기
	const orderItem = useRecoilValue(orderItemState);
	const checkInDate = useRecoilValue(checkInDateState);
	const checkOutDate = useRecoilValue(checkOutDateState);

	console.log(orderItem);

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
								<div className="font-semibold text-content ">
									<>{checkInDate}(화)</>
								</div>
								<div className="text-sm">15: 00</div>
							</div>
							<div className="flex flex-col w-1/2 ">
								<div className="text-xxsm text-textGray">체크아웃</div>
								<div className="font-semibold text-content ">
									<>{checkOutDate} (금)</>
								</div>
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
								<div className="text-sm text-textGray pr-1">연박 / 3박</div>
								<div className="font-semibold text-content">
									{orderItem.price} 원
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
										{item.checkinDate}(화)
									</div>
									<div className="text-sm">15: 00</div>
								</div>
								<div className="flex flex-col w-1/2 ">
									<div className="text-xxsm text-textGray">체크아웃</div>
									<div className="font-semibold text-content ">
										{item.checkoutDate} (금)
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
									<div className="text-sm text-textGray pr-1">연박 / 3박</div>
									<div className="font-semibold text-content">
										{item.roomType.price} 원
									</div>
								</div>
							</div>
						</div>
					))}
					<div className="flex justify-end items-center content-center">
						<div className="font-semibold "> 총 {totalPrice} 원</div>
					</div>
				</>
			)}
		</>
	);
};

export default ReservationItem;
