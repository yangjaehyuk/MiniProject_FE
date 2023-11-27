import { atom, selector } from 'recoil';

export enum OrderEnum {
	STAR_DESC = 'STAR_DESC',
	PRICE_ASC = 'PRICE_ASC',
	PRICE_DESC = 'PRICE_DESC',
}

export const orderState = atom<OrderEnum>({
	key: 'orderState',
	default: OrderEnum.STAR_DESC,
});

export const orderTextState = selector({
	key: 'orderTextState',
	get: ({ get }) => orderToKor(get(orderState)),
});

function orderToKor(key: OrderEnum) {
	switch (key) {
		case OrderEnum.STAR_DESC:
			return '평점 높은 순';
		case OrderEnum.PRICE_DESC:
			return '예약가 높은 순';
		case OrderEnum.PRICE_ASC:
			return '예약가 낮은 순';
		default:
			return '';
	}
}
