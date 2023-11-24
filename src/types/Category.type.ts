export interface ProductItem {
	id: number;
	image: string;
	title: string;
	rating: number;
	price: number;
}

export type ReservationInfo = {
	reservationName: string;
	reservationNumber: string;
	userName: string;
	userNumber: string;
	paymentMethod: string;
	requiredCheckbox1: boolean;
	requiredCheckbox2: boolean;
	requiredCheckbox3: boolean;
	optionalCheckbox1?: boolean;
	optionalCheckbox2?: boolean;
	allAgreementCheckbox: boolean;
};

export interface ProductSwiperProps {
	items: ProductItem[];
}

export type TopRateItemProps = ProductItem & {
	index: number;
};

export const CATEGORY_SEOUL_DATA: ProductItem[] = [
	{
		id: 1,
		image: 'hotels/seoul/category-seoul01.png',
		title: '노보텔 앰배서더 서울 용산',
		rating: 4.5,
		price: 84000,
	},
	{
		id: 2,
		image: 'hotels/seoul/category-seoul02.png',
		title: '호텔 스카이파크 킹스타운 동대문점',
		rating: 4.5,
		price: 84000,
	},
	{
		id: 3,
		image: 'hotels/seoul/category-seoul03.png',
		title: '콘래드 서울',
		rating: 4.5,
		price: 84000,
	},
	{
		id: 4,
		image: 'hotels/seoul/category-seoul04.png',
		title: '코트야드 메리어트 서울 보타닉 파크',
		rating: 4.5,
		price: 84000,
	},
	{
		id: 5,
		image: 'hotels/seoul/category-seoul05.png',
		title: '이비스 스타일 앰배서더 서울 용산',
		rating: 4.5,
		price: 84000,
	},
];
