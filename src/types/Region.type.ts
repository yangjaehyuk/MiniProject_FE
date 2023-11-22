import { ProductItem } from './Category.type';

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
