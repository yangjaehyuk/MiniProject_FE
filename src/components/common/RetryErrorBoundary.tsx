import React, { PropsWithChildren } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Button, Typography } from '@material-tailwind/react';

const RetryErrorBoundary = ({ children }: PropsWithChildren<unknown>) => {
	// 참고: https://react-query.tanstack.com/reference/useQueryErrorResetBoundary
	const { reset } = useQueryErrorResetBoundary();

	return (
		<ErrorBoundary
			onReset={reset}
			fallbackRender={({ resetErrorBoundary }) => (
				<div className="pt-[100px] text-center">
					<Typography variant="h3" className="mb-6">
						죄송합니다.
					</Typography>
					<Typography variant="paragraph" className="mb-3">
						네트워크에 문제가 있어 정보를 불러올 수 없습니다. <br />
						서비스에 불편을 드려 죄송합니다.
					</Typography>
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

export default RetryErrorBoundary;
