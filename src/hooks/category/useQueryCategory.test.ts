import { renderHook, waitFor } from '@testing-library/react';
import createQueryWrapper from 'hooks/common/createQueryWrapper';
import { useQuery } from 'react-query';
import { CATEGORY_SEOUL_DATA } from 'types/Category.type';

describe('카테고리 받아오는지 확인', () => {
	function useGetCategory() {
		const res = useQuery('category', () => CATEGORY_SEOUL_DATA);
		return res;
	}

	it('fetch data', async () => {
		const { result } = renderHook(() => useGetCategory(), {
			wrapper: createQueryWrapper(),
		});

		await waitFor(() => expect(result.current.isSuccess).toBe(true));
		expect(result.current.data).toBeDefined();
	});
});
export {};
