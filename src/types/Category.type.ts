export interface ProductItem {
	id: number;
	name: string;
	star: number;
	price: number;
	image: string;
}

export type RegionItemProps = ProductItem & {
	diff: number;
};

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
		name: '노보텔 앰배서더 서울 용산',
		star: 4.5,
		price: 84000,
	},
	{
		id: 2,
		image: 'hotels/seoul/category-seoul02.png',
		name: '호텔 스카이파크 킹스타운 동대문점',
		star: 4.5,
		price: 84000,
	},
	{
		id: 3,
		image: 'hotels/seoul/category-seoul03.png',
		name: '콘래드 서울',
		star: 4.5,
		price: 84000,
	},
	{
		id: 4,
		image: 'hotels/seoul/category-seoul04.png',
		name: '코트야드 메리어트 서울 보타닉 파크',
		star: 4.5,
		price: 84000,
	},
	{
		id: 5,
		image: 'hotels/seoul/category-seoul05.png',
		name: '이비스 스타일 앰배서더 서울 용산',
		star: 4.5,
		price: 84000,
	},
];

export interface CategoryInnerProps {
	handleOpen: () => void;
}

export interface ModalProps {
	isOpen: boolean;
	handleOpen: () => void;
}

export interface AccommodationsRoot {
	success: boolean;
	data: Accommodations;
	error: string;
}

export interface Accommodations {
	accommodations: AccommodationsResult[];
	totalElements: number;
	totalPages: number;
}

export interface AccommodationsResult {
	id: number;
	name: string;
	star: number;
	price: number;
	image: string;
}

export enum CategoryTitles {
	HOTEL = 'HOTEL',
	RESORT = 'RESORT',
	PENSION = 'PENSION',
	POOL_VILLA = 'POOL_VILLA',
}
