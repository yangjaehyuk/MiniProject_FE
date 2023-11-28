import type SwiperCore from 'swiper';

export interface RegionProdProps {
	region: string;
}

export interface RegionProdNavBtnProps {
	index: number;
	region: string;
	category: string;
	isActive: boolean;
	handleClick: (index: number) => void;
}

export interface RegionProdBestItemsProps {
	setSwiper: (swiper: SwiperCore) => void;
}

export const REGION_CATEGORIES = ['호텔', '리조트', '펜션', '풀빌라'];
export const REGION_HOTPICKS = [
	{
		id: 'hotpick1',
		src: '/region/hotpick01.png',
	},
	{
		id: 'hotpick2',
		src: '/region/hotpick02.png',
	},
	{
		id: 'hotpick3',
		src: '/region/hotpick03.png',
	},
	{
		id: 'hotpick4',
		src: '/region/hotpick04.png',
	},
];
