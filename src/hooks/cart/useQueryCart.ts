import { useQuery } from 'react-query';
import Instance from 'apis/axios';

export const getCart = async () => {
	const res = await Instance.get(`carts`);
	return res.data;
};

export const useQueryMainRegion = () => {
	const { data, isLoading } = useQuery('cart', getCart);
	return { data, isLoading };
};
