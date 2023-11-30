import { atom } from 'recoil';
import { dataCartItem, CartItem } from 'types/Cart.type';

export const cartItemState = atom<dataCartItem[]>({
	key: 'cartItem',
	default: [],
});

export const totalPriceState = atom({
	key: 'totalPriceState',
	default: 0,
});

export const cartCountState = atom({
	key: 'cartCountState',
	default: 0,
});
