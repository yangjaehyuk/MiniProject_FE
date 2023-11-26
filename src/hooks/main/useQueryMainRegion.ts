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
