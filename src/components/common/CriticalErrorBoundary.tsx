// shared/CriticalErrorBoundary/index.tsx
import React, { PropsWithChildren, useState } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { nanoid } from 'nanoid';

import { isAxiosError } from 'axios';
import { Button } from '@material-tailwind/react';

const CriticalErrorBoundary = ({ children }: PropsWithChildren<unknown>) => {
	const { reset } = useQueryErrorResetBoundary();
	const [errorUuid, setErrorUuid] = useState<string>();

	return (
		<ErrorBoundary
			onReset={() => {
				reset();
			}}
			onError={(error) => {
				if (
					!(
						isAxiosError(error) &&
						error?.response?.status === 500 &&
						error?.response?.data === 'CRITICAL_ERROR'
					)
				) {
					// 이 ErrorBoundary에서 처리하면 안되는 오류의 경우 상위 ErrorBoundary로 위임
					throw error;
				} else {
					// 이 ErrorBoundary에서 처리되는 오류의 경우 UUID 부여 후 사용자에게 노출
					const uuid = nanoid(5);
					setErrorUuid(uuid);
					console.log(errorUuid);
				}
			}}
			fallbackRender={({ resetErrorBoundary }) => (
				<div>
					<h1> 데이터를 불러오는데 실패하였습니다. </h1>
					<p> 에러가 지속되면 고객센터로 문의하세요. </p>
					<Button
						variant="filled"
						onClick={() => resetErrorBoundary()}
						className="bg-primary"
					>
						다시 시도
					</Button>
				</div>
			)}
		>
			{children}
		</ErrorBoundary>
	);
};

export default CriticalErrorBoundary;
