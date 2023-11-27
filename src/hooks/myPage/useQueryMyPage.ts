import { getUserOrderInfo } from 'apis/axios';
import React from 'react';
import { useQuery } from 'react-query';

const getMyPageData = async () => {
	try {
		const { data } = await getUserOrderInfo();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const useQueryMyPage = () => {
	const { data } = useQuery(['myPage'], () => getMyPageData(), {
		retry: 0,
	});
	return { data };
};

export default useQueryMyPage;
