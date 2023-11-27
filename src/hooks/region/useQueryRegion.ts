import React from 'react';
import { AccommodationsRoot } from 'types/Category.type';
import { useInfiniteQuery } from 'react-query';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { foramtYYYYMMDD } from 'utils/formatDate';
import axiosInstance from 'apis/axios';
import { OrderEnum, orderState } from 'recoil/atoms/orderAtom';

interface QueryData {
	category: string;
	region: string;
	start: string;
	end: string;
	order: OrderEnum;
}

/**
 * 특정 지역의 카테고리별 상품들을 fetch 하는 함수입니다.
 * @returns 상품 목록을 반환 합니다.
 */
const getRegionMainProducts = async (query: QueryData, pageParam: number) => {
	const { data } = await axiosInstance.get<AccommodationsRoot>(
		`accommodations?type=${query.category}&region=${query.region}&from=${query.start}&to=${query.end}&page=${pageParam}&order=${query.order}&size=4`,
	);
	return data;
};

/**
 * 특정 지역의 카테고리별 상품을 반환하는 Hook 입니다.
 * @param key 지역 이름을 전달합니다. (리액트 쿼리의 키 값)
 * @returns 특정 지역의 카테고리별 상품을 반환합니다.
 */
const useQueryRegion = (isInView: boolean) => {
	const { category = '', region = '' } = useParams();
	const startDate = useRecoilValue(checkInDateState);
	const endDate = useRecoilValue(checkOutDateState);
	const start = foramtYYYYMMDD(startDate);
	const end = foramtYYYYMMDD(endDate);
	const order = useRecoilValue(orderState);
	const query = {
		category: category.toUpperCase(),
		region: region.toUpperCase(),
		start,
		end,
		order,
	};
	// Queries
	const {
		data,
		refetch,
		// isLoading,
		// isFetching,
		// hasNextPage,
		fetchNextPage,
		// isFetchingNextPage,
	} = useInfiniteQuery(
		[`${category.toUpperCase()}/${region.toUpperCase()}/${order}`],
		({ pageParam = 1 }) => getRegionMainProducts(query, pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage === undefined) return;
				const nextPage =
					lastPage.data.totalPages > allPages.length
						? allPages.length + 1
						: undefined;
				return nextPage;
			},
			retry: 0,
			suspense: true,
			useErrorBoundary: true,
		},
	);

	React.useEffect(() => {
		if (isInView) {
			fetchNextPage();
		}
	}, [isInView]);
	return { data, refetch };
};

export default useQueryRegion;
