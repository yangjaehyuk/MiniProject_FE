import { useQuery } from 'react-query';
import { isAxiosError } from 'axios';
import axiosInstance from 'apis/axios';
import { AccommodationsRoot } from 'types/Category.type';
import { useRecoilValue } from 'recoil';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { foramtYYYYMMDD } from 'utils/formatDate';
import { useParams } from 'react-router-dom';

/**
 * 각 지역 카테고리별로 별점 높은 상품을 6개 조회 합니다.
 * @param category type [HOTEL, RESORT, PENSION, POOL_VILLA] 없으면 전체 검색
 * @returns AccommodationsRoot 형식으로 조회한 타입중에 별점 높은 상품들을 반환
 */
const getRegionBestAccommodations = async (
	category: string,
	region: string,
	startDate: Date,
	endDate: Date,
) => {
	const start = foramtYYYYMMDD(startDate);
	const end = foramtYYYYMMDD(endDate);
	const { data } = await axiosInstance.get<AccommodationsRoot>(
		`accommodations?type=${category}&region=${region}&from=${start}&to=${end}&order=STAR_DESC&size=6`,
	);
	return data;
};

/**
 * 주소창의 카테고리를 받아와서 별점 높은 상품을 반환 하는 Hook 입니다.
 * @returns AccommodationsRoot | undefined 를 반환 합니다.
 */
export const useQueryRegionBest = (category: string) => {
	const { region = '' } = useParams();
	const startDate = useRecoilValue(checkInDateState);
	const endDate = useRecoilValue(checkOutDateState);
	const { data, isLoading } = useQuery(
		[`${category.toUpperCase()}/${region.toUpperCase()}/topRated`],
		() =>
			getRegionBestAccommodations(
				category.toUpperCase(),
				region.toUpperCase(),
				startDate,
				endDate,
			),
		{
			retry: 0,
			suspense: true,
			useErrorBoundary: true,
			onError: (error) => {
				if (isAxiosError(error)) console.error(error);
			},
		},
	);
	return { data, isLoading };
};
