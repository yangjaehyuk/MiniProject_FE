import { CategoryTitles } from 'types/Category.type';
import { RegionTitles } from 'types/Region.type';

export function regionToKor(engRegionName: string): string {
	const engName = engRegionName.toUpperCase();
	switch (engName) {
		case RegionTitles.SEOUL:
			return '서울';
		case RegionTitles.BUSAN:
			return '부산';
		case RegionTitles.GYEONGGI:
			return '경기';
		case RegionTitles.INCHEON:
			return '인천';
		case RegionTitles.GANGWON:
			return '강원';
		case RegionTitles.GYEONGSANG:
			return '경상';
		case RegionTitles.JEOLLA:
			return '전라';
		case RegionTitles.CHUNGCHEONG:
			return '충청';
		case RegionTitles.JEJU:
			return '제주';
		default:
			return '';
	}
}

export function categoryToKor(engCategoryName: string): string {
	const engName = engCategoryName.toUpperCase();
	switch (engName) {
		case CategoryTitles.HOTEL:
			return '호텔';
		case CategoryTitles.RESORT:
			return '리조트';
		case CategoryTitles.PENSION:
			return '펜션';
		case CategoryTitles.POOL_VILLA:
			return '풀빌라';
		default:
			return '';
	}
}
