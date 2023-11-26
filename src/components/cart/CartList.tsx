import React from 'react';
import styles from '../../components/cart/Cart.module.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Accommodation, RoomType, CartItem } from 'types/Cart.type';

interface CartListProps {
	dataCartItems: CartItem[];
	handleCheckbox: (clickedCartItem: CartItem) => void;
}

const CartList: React.FC<CartListProps> = ({
	dataCartItems,
	handleCheckbox,
}) => {
	// console.log(dataCartItems);
	return (
		<>
			<div className={styles.wrap}>
				{/* 예약 숙소 정보 */}
				{dataCartItems.map((item) => (
					<div className="w-[screen] bg-pink-200" key={item.id}>
						<div className="py-[12px]  bg-white ">
							<div className="mt-4">
								<div className="text-content font-semibold">
									{item.accommodation.name}
								</div>
								<div className="text-sm text-textGray ">
									<span className="pr-1">숙소</span>
									<span className="pr-1">|</span>
									<span> {item.accommodation.address}</span>
								</div>
							</div>
							<div>
								<div className="flex justify-between items-center">
									<div className="text-content font-semibold ">
										{item.roomType.name}
									</div>
									<div className="text-gray w-12 h-12">
										<CloseOutlinedIcon fontSize="small" />
									</div>
								</div>
								<div className="flex">
									<input
										type="checkbox"
										onChange={() => handleCheckbox(item)}
									/>
									<img
										className="h-[80px] w-[80px] mx-3 rounded-md"
										src={item.accommodation.image}
									></img>
									<div className="flex-col flex text-sm text-textGray ">
										<span className="  text-[#1A1A1A] ">
											{item.checkinDate} ~ {item.checkoutDate} (금) | 3박
										</span>
										<span>체크인 15:00 | 체크아웃 11:00</span>
										<span>기준 2명 / 최대 {item.roomType.capacity}명</span>
										<span> 선착순 2만원 마감 임박</span>
									</div>
								</div>
							</div>
							<div className="flex justify-end">
								<span className="text-sm">연박 </span>
								<span className="text-sm font-semibold">
									{item.roomType.price}원
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default CartList;
