import axiosInstance from 'apis/axios';
import { isAxiosError } from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { AccommodationsRoot } from 'types/Category.type';
import { foramtYYYYMMDD } from 'utils/formatDate';

/**
 * 호텔 / 리조트 / 펜션 / 풀빌라등 각 카테고리의 상품들을 fetch 하는 함수입니다.
 * @returns 상품 목록을 반환 합니다.
 */
const getCategoryProducts = async (
	category: string,
	region: string,
	startDate: Date,
	endDate: Date,
) => {
	const start = foramtYYYYMMDD(startDate);
	const end = foramtYYYYMMDD(endDate);
	const { data } = await axiosInstance.get<AccommodationsRoot>(
		`accommodations?type=${category}&region=${region}&from=${start}&to=${end}`,
	);
	return data;
	// try {
	// 	const { data } = await axiosInstance.get<AccommodationsRoot>(
	// 		`accommodations?type=${category}&region=${region}&from=${start}&to=${end}`,
	// 	);
	// 	return data;
	// } catch (error) {
	// 	if (isAxiosError(error)) {
	// 		console.error(error.message);
	// 	}
	// }
};

/**
 * 카테고리별 상품을 반환하는 Hook 입니다.
 * @param category 카테고리 명을 전달합니다. (리액트 쿼리의 키 값)
 * @returns 카테고리별 상품을 반환합니다.
 */
const useQueryCategory = (region: string) => {
	const { category = '' } = useParams();
	const startDate = useRecoilValue(checkInDateState);
	const endDate = useRecoilValue(checkOutDateState);
	// Queries
	const { data } = useQuery(
		[`${category?.toUpperCase()}/${region}/recommendations`],
		() =>
			getCategoryProducts(category?.toUpperCase(), region, startDate, endDate),
		{
			retry: 0,
			suspense: true,
			useErrorBoundary: true,
			onError: (error) => {
				if (isAxiosError(error)) console.error(error);
			},
		},
	);
	return { data, category };
};

export default useQueryCategory;

/**
 * 카테고리별로 별점 높은 상품을 6개 조회 합니다.
 * @param category type [HOTEL, RESORT, PENSION, POOL_VILLA] 없으면 전체 검색
 * @returns AccommodationsRoot 형식으로 조회한 타입중에 별점 높은 상품들을 반환
 */
const getBestAccommodations = async (
	category: string,
	startDate: Date,
	endDate: Date,
) => {
	const cateUpper = category.toUpperCase();
	const start = foramtYYYYMMDD(startDate);
	const end = foramtYYYYMMDD(endDate);
	const { data } = await axiosInstance.get<AccommodationsRoot>(
		`accommodations?type=${cateUpper}&from=${start}&to=${end}&order=STAR_DESC&size=6`,
	);
	return data;
	// try {
	// 	const { data } = await axiosInstance.get<AccommodationsRoot>(
	// 		`accommodations?type=${cateUpper}&from=${start}&to=${end}&order=STAR_DESC&size=6`,
	// 	);
	// 	return data;
	// } catch (error) {
	// 	if (isAxiosError(error)) {
	// 		console.error(error.message);
	// 	}
	// }
};

/**
 * 주소창의 카테고리를 받아와서 별점 높은 상품을 반환 하는 Hook 입니다.
 * @returns AccommodationsRoot | undefined 를 반환 합니다.
 */
export const useQueryBestCategory = () => {
	const { category = '' } = useParams();
	const startDate = useRecoilValue(checkInDateState);
	const endDate = useRecoilValue(checkOutDateState);
	const { data, isSuccess, isError } = useQuery(
		[`${category?.toUpperCase()}/topRated`],
		() => getBestAccommodations(category, startDate, endDate),
		{
			retry: 0,
			suspense: true,
			useErrorBoundary: true,
			onError: (error) => {
				if (isAxiosError(error)) console.error(error);
			},
		},
	);
	return { data, isSuccess, isError };
};
