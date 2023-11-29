/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

// React-query를 위한 Wrapper 컴포넌트 생성
const createQueryWrapper = () => {
	// ✅ creates a new QueryClient for each test
	const testQueryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

	const Wrapper = ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={testQueryClient}>
			<RecoilRoot>{children}</RecoilRoot>
		</QueryClientProvider>
	);
	return Wrapper;
};

export default createQueryWrapper;
