import { AccommodationsRoot } from 'types/Category.type';
import { useInfiniteQuery, useQuery } from 'react-query';
// import { REGION_SEOUL_DATA } from 'types/Region.type';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { endDateState, startDateState } from 'recoil/atoms/dateAtom';
import { foramtYYYYMMDD } from 'utils/formatDate';
import axiosInstance from 'apis/axios';

interface QueryData {
	category: string;
	region: string;
	start: string;
	end: string;
}

/**
 * 특정 지역의 카테고리별 상품들을 fetch 하는 함수입니다.
 * @returns 상품 목록을 반환 합니다.
 */
const getRegionMainProducts = async (query: QueryData, pageParam: number) => {
	const cateUpper = query.category.toUpperCase();
	const regionUpper = query.region.toUpperCase();
	console.log(query);
	const { data } = await axiosInstance.get<AccommodationsRoot>(
		// `accommodations?type=${cateUpper}&region=${regionUpper}&from=${query.start}&to=${query.end}&page=${pageParam}&size=6`,
		`accommodations`,
	);
	return data;
};

/**
 * 특정 지역의 카테고리별 상품을 반환하는 Hook 입니다.
 * @param key 지역 이름을 전달합니다. (리액트 쿼리의 키 값)
 * @returns 특정 지역의 카테고리별 상품을 반환합니다.
 */
const useQueryRegion = () => {
	const { category = '', region = '' } = useParams();
	const startDate = useRecoilValue(startDateState);
	const endDate = useRecoilValue(endDateState);
	const start = foramtYYYYMMDD(startDate);
	const end = foramtYYYYMMDD(endDate);
	const query = {
		category,
		region,
		start,
		end,
	};
	// Queries
	const {
		data,
		isLoading,
		isFetching,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery(
		[`${category}/${region}`],
		({ pageParam = 1 }) => getRegionMainProducts(query, pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				const nextPage = allPages.length + 1;
				return nextPage;
			},
			suspense: true,
		},
	);
	return data;
};

export default useQueryRegion;
