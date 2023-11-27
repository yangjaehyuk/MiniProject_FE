import React from 'react';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { dataCartItem, CartItem } from 'types/Cart.type';

interface cartItemProps {
	cartItem: dataCartItem[];
	totalPrice: number;
}

const ReservationItem: React.FC<cartItemProps> = ({ cartItem, totalPrice }) => {
	return (
		<div>
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
						<PersonOutlineRoundedIcon sx={{ fontSize: '1rem' }} /> 기준 2명 /
						최대
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
		</div>
	);
};

export default ReservationItem;
