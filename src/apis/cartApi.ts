import instance from './axios';

// 장바구니 아이템 삭제
export const deleteCartItem = async (itemId: string) => {
	const res = await instance.delete(`carts/${itemId}`);
	return res;
};
