import React, { useEffect, useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useRecoilValue } from 'recoil';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { footerFormatFullDateRange } from 'utils/formatDate';

interface FooterProps {
	formattedPrice: string;
	status: string | null;
}

export default function Footer({ formattedPrice, status }: FooterProps) {
	const checkInDate = useRecoilValue<Date>(checkInDateState);
	const checkOutDate = useRecoilValue<Date>(checkOutDateState);

	const formattingDate = footerFormatFullDateRange(checkInDate, checkOutDate);
	const [freeCancle, setFreeCancle] = useState(false);

	console.log(status);

	const isFreeCancle = () => {
		const date = new Date(checkInDate);
		const today = new Date();
		return (
			date.getFullYear() !== today.getFullYear() ||
			date.getMonth() !== today.getMonth() ||
			date.getDate() !== today.getDate()
		);
	};

	useEffect(() => {
		setFreeCancle(isFreeCancle());
	}, [checkInDate]);

	return (
		<div className="fixed h-[68px] bottom-0 left-1/2 transform translate-x-[-50%] bg-white w-[768px] px-5 py-3 shadow-xl ">
			<div className="flex justify-between items-center w-mx-auto bg-white">
				<div className="flex flex-col">
					<div className="flex">
						<p className="text-sm font-bold">{formattingDate}</p>
						<p className="text-green text-sm font-bold ml-3">
							{freeCancle ? `무료취소` : `취소 및 환불 불가`}
						</p>
					</div>
					<div>
						<p className="text-title font-bold text-black">
							{formattedPrice}원
						</p>
					</div>
				</div>
				<div className="flex gap-x-2">
					<button className="border border-borderGray rounded w-[44px] h-[44px] cursor-pointer">
						<ShoppingCartOutlinedIcon fontSize="small" />
					</button>
					{status !== undefined && status === 'OK' ? (
						<button className="bg-secondary w-[364px] h-[44px] text-white rounded text-[16px] font-bold cursor-pointer hover:bg-hoverSecondary">
							예약하기
						</button>
					) : (
						<button className="bg-soldOut w-[364px] h-[44px] text-white rounded text-[16px] font-bold cursor-pointer">
							예약마감
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
