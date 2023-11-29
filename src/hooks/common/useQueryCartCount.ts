import api from 'apis/axios';
import { useQuery } from 'react-query';
import { CartResponse } from 'types/Cart.type';

export const getCartCount = async (): Promise<number> => {
	try {
		const res = await api.get<CartResponse>(`carts`);
		const cartLength = res.data.data?.cartItems.length;
		return cartLength ?? 0;
	} catch (e) {
		return 0;
	}
};

export const useQueryCartCount = () => {
	const { data, isLoading } = useQuery(['cartCount'], getCartCount, {
		staleTime: 0,
	});
	return { data, isLoading };
};
