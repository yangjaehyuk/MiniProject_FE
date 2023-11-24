import { ProductItem } from 'types/Category.type';
import { useQuery } from 'react-query';
import { REGION_SEOUL_DATA } from 'types/Region.type';

/**
 * 특정 지역의 카테고리별 상품들을 fetch 하는 함수입니다.
 * @returns 상품 목록을 반환 합니다.
 */
const getRegionProducts = (): Promise<ProductItem[]> => {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve(REGION_SEOUL_DATA);
		}, 500),
	);
};

/**
 * 특정 지역의 카테고리별 상품을 반환하는 Hook 입니다.
 * @param key 지역 이름을 전달합니다. (리액트 쿼리의 키 값)
 * @returns 특정 지역의 카테고리별 상품을 반환합니다.
 */
const useQueryRegion = (key: string) => {
	// Queries
	const { data } = useQuery<ProductItem[]>(key, getRegionProducts, {
		suspense: true,
	});
	return data;
};

export default useQueryRegion;
