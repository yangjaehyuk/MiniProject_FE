import { useQuery } from 'react-query';
import Instance from 'apis/axios';
import { CartResponse } from 'types/Cart.type';
import { AxiosResponse } from 'axios';

export const getCart = async (): Promise<CartResponse> => {
	const res: AxiosResponse<CartResponse> = await Instance.get(`carts`);
	return res.data;
};

export const useQueryMainRegion = () => {
	const { data, isLoading } = useQuery('cart', getCart);
	return { data, isLoading };
};
