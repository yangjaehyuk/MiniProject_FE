import { ModalProps, ProductItem } from './Category.type';

export interface ProductItemsProps {
	title: string;
	items: ProductItem[];
}

export const REGION_SEOUL_DATA: ProductItem[] = [
	{
		id: 1,
		image:
			'https://yaimg.yanolja.com/v5/2023/03/23/15/640/641c76db5ab761.18136153.jpg',
		title: '코트야드 메리어트 서울 보타닉 파크',
		rating: 4.9,
		price: 264000,
	},
	{
		id: 2,
		image:
			'https://yaimg.yanolja.com/v5/2022/10/14/14/640/63497128440156.45600411.jpg',
		title: '호텔 스카이파크 킹스타운 동대문점',
		rating: 4.7,
		price: 148000,
	},
	{
		id: 3,
		image:
			'https://yaimg.yanolja.com/v5/2022/08/12/09/640/62f61a69ce4423.63495204.jpg',
		title: '노보텔 앰배서더 서울 용산',
		rating: 4.6,
		price: 221000,
	},
	{
		id: 4,
		image:
			'https://yaimg.yanolja.com/v5/2023/03/28/17/640/64231e64d89196.05244324.png',
		title: '콘래드 서울',
		rating: 4.9,
		price: 457600,
	},
	{
		id: 5,
		image:
			'https://yaimg.yanolja.com/v5/2022/08/31/17/640/630f9add990138.40317374.jpg',
		title: '페어몬트 앰배서더 서울',
		rating: 4.8,
		price: 506000,
	},
	{
		id: 6,
		image:
			'https://yaimg.yanolja.com/v5/2022/09/13/22/640/632105e4e34489.56634271.jpg',
		title: '호텔 리베라 청담',
		rating: 4.4,
		price: 126430,
	},
	{
		id: 7,
		image:
			'https://yaimg.yanolja.com/v5/2023/04/04/10/640/642bf73b755975.78717814.jpg',
		title: '나인트리 프리미어 로카우스 호텔 서울 용산',
		rating: 4.7,
		price: 215000,
	},
	{
		id: 8,
		image:
			'https://yaimg.yanolja.com/v5/2022/08/25/15/640/6307957c193de7.66392039.jpg',
		title: '노보텔 앰배서더 강남',
		rating: 4.6,
		price: 263340,
	},
	{
		id: 9,
		image:
			'https://yaimg.yanolja.com/v5/2022/08/12/09/640/62f619ab5c01b8.02896778.jpg',
		title: '이비스 스타일 앰배서더 서울 용산',
		rating: 4.6,
		price: 227500,
	},
];

export interface RegionListItem {
	name: string;
	image: string;
	link: string;
	author: string;
	right1: string;
	right2: string;
}

export const REGION_LIST: RegionListItem[] = [
	{
		name: '서울',
		image: '/region/region-seoul.jpg',
		link: 'seoul',
		author: `Ciaran O'Brien`,
		right1:
			'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%B0%A4-%EB%8F%99%EC%95%88-%EB%8F%84%EC%8B%9C%EC%99%80-%EC%A7%80%EC%97%AD-%EB%B3%B4%EA%B8%B0-qegMLAiTBA4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		right2:
			'https://unsplash.com/ko/@icidius?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
	},
	{
		name: '제주',
		image: '/region/region-jeju.jpg',
		link: 'jeju',
		author: `miram Oh`,
		right1:
			'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%82%AE-%EB%8F%99%EC%95%88-%EB%B0%94%EB%8B%B7%EA%B0%80%EC%97%90-%EC%9E%88%EB%8A%94-%EA%B2%80%EC%9D%80-%EB%B0%94%EC%9C%84-sNxmBz_aJ_k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		right2:
			'https://unsplash.com/ko/@talking_dolphin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
	},
	{
		name: '부산',
		image: '/region/region-busan.jpg',
		link: 'busan',
		author: `Minku Kang`,
		right1:
			'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EC%B8%B5-%EA%B1%B4%EB%AC%BC%EC%9D%B4-%EB%A7%8E%EC%9D%80-%ED%95%B4%EB%B3%80-ss2eCCSjSQo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		right2:
			'https://unsplash.com/ko/@minkus?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
	},
	{
		name: '충청',
		image: '/region/region-chungcheong.jpg',
		link: 'chungcheong',
		author: `rawkkim`,
		right1:
			'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/edificio-a-torre-grigio-su-cielo-blu-MkXc9iEiJwM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
		right2:
			'https://unsplash.com/ko/@rawkkim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
	},
];

export interface RegionListNavProps {
	handleRegionOpen: () => void;
	handleOptionOpen: () => void;
}

export enum CapacityAction {
	COUNT_UP = 'ADD_STUDENT',
	COUNT_DOWN = 'DEL_STUDENT',
}

export type RegionProdOptionModalProps = ModalProps & {
	handleDateOpen: () => void;
	handleCapaOpen: () => void;
};

export const REGIONS = [
	{ name: '서울', image: '/region/region-seoul.jpg' },
	{ name: '부산', image: '/region/region-busan.png' },
	{ name: '제주', image: '/region/region-jeju.png' },
	{ name: '경기', image: '/region/region-gyeonggi.jpg' },
	{ name: '인천', image: '/region/region-incheon.jpg' },
	{ name: '강원', image: '/region/region-gangwon.png' },
	{ name: '경상', image: '/region/region-gyeongsang.png' },
	{ name: '전라', image: '/region/region-jeonra.png' },
	{ name: '충청', image: '/region/region-chungcheong.jpg' },
];
