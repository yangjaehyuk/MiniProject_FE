import { getUserOrderInfo } from 'apis/axios';
import { useQuery } from 'react-query';

const getMyPageData = async (i: number) => {
	try {
		if (i == 1) {
			i = 12;
		} else if (i == 2) {
			i = 24;
		}
		const currentDate = new Date();
		currentDate.setMonth(currentDate.getMonth() - i);
		const { data } = await getUserOrderInfo();
		const filteredData = data?.filter((order) => {
			return order.orderItems?.some((item) => {
				const criteria = new Date(order.orderDate);
				return criteria >= currentDate;
			});
		});
		return filteredData;
	} catch (error) {
		console.log(error);
	}
};

const useQueryMyPage = (i: number) => {
	const { data } = useQuery([`myPage/${i}`], () => getMyPageData(i), {
		staleTime: Infinity,
	});
	return { data };
};

export default useQueryMyPage;
