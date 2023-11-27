import instance from './axios';

const cartAPI = {
	postRoomToCart(
		roomTypeId: number,
		checkInDate: string,
		checkOutDate: string,
	) {
		return instance.post('carts', {
			roomTypeId: roomTypeId,
			checkinDate: checkInDate,
			checkoutDate: checkOutDate,
		});
	},
};

// 장바구니 개별 삭제
export const deleteCartItem = async (itemId: string) => {
	const res = await instance.delete(`carts/${itemId}`);
	return res.data;
};

// 장바구니 전체 삭제
export const allDeleteItem = async () => {
	const res = await instance.delete('carts');
	return res.data;
};

export default cartAPI;
