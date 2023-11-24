import { useQuery } from 'react-query';
import { CATEGORY_SEOUL_DATA, ProductItem } from 'types/Category.type';

/**
 * 호텔 / 리조트 / 펜션 / 풀빌라등 각 카테고리의 상품들을 fetch 하는 함수입니다.
 * @returns 상품 목록을 반환 합니다.
 */
const getCategoryProducts = (): Promise<ProductItem[]> => {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve(CATEGORY_SEOUL_DATA);
		}, 500),
	);
};

/**
 * 카테고리별 상품을 반환하는 Hook 입니다.
 * @param key 카테고리 명을 전달합니다. (리액트 쿼리의 키 값)
 * @returns 카테고리별 상품을 반환합니다.
 */
const useQueryCategory = (key: string) => {
	// Queries
	const { data } = useQuery<ProductItem[]>(key, getCategoryProducts, {
		suspense: true,
	});
	return data;
};

export default useQueryCategory;
