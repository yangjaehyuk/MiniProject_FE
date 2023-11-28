import { useQuery } from 'react-query';
import Instance from 'apis/axios';

export const getSeoulDate = async (region: string) => {
	const res = await Instance.get(
		`accommodations?region=${region.toUpperCase()}&size=6`,
	);
	return res.data;
};

export const useQueryMainRegion = (region: string) => {
	const { data, isLoading } = useQuery(region.toUpperCase(), () =>
		getSeoulDate(region),
	);
	return { data, isLoading };
};

// 카테고리 별 숙소 받기
export const getCategory = async (type: string) => {
	const res = await Instance.get(`accommodations?type=${type}&size=8`);
	return res.data;
};

export const useQueryMainCategory = (type: string) => {
	const { data, isLoading } = useQuery([`MAIN/${type.toUpperCase()}`], () =>
		getCategory(type),
	);
	return { data, isLoading };
};
