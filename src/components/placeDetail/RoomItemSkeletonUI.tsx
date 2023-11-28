import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function RoomItemSkeletonUI() {
	return (
		<div className="flex py-5 justify-between border-b border-borderGray cursor-pointer">
			<div>
				<div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
					<svg
						className="w-10 h-10 text-gray-200 dark:text-gray-600"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 16 20"
					>
						<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
						<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
					</svg>
				</div>
				<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
				<div className="flex gap-x-0.5 text-secondaryTextGray mt-2">
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
				</div>
			</div>
			<div className="p-4 w-[386px] h-fit border-borderGray border rounded-lg">
				<div className="flex text-sm justify-between ">
					<span className="text-black font-semibold">숙박</span>
					<div className="flex items-center">
						<span className="text-blue font-bold ml-2">상세보기</span>
						<KeyboardArrowRightIcon
							sx={{ fill: '#0152cc', fontSize: '16px' }}
						/>
					</div>
				</div>
				<div>
					<p className="text-sm text-textGray py-1">
						체크인 <span className="font-semibold">15:00</span> ~ 체크아웃{' '}
						<span className="font-semibold">11:00</span>
					</p>
				</div>
				<div className="flex flex-col items-end">
					<div className="flex items-center">
						<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					</div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				</div>
				<div className="flex flex-col items-end mt-3">
					<button className="bg-soldOut text-white w-[120px] rounded text-sm py-2">
						최대 인원 초과
					</button>
				</div>
			</div>
		</div>
	);
}
