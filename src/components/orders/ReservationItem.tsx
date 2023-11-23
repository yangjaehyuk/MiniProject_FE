import React from 'react';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

const ReservationItem = () => {
	return (
		<div>
			<div className="my-4">
				<div className="font-semibold ">가평 도도키즈풀빌라</div>
				<div className="font-semibold text-content ">
					키즈패밀리 7 (수정장미보유/투룸)
				</div>
			</div>
			<div className="flex ">
				<div className="flex flex-col w-1/2">
					<div className="text-xxsm text-textGray">체크인</div>
					<div className="font-semibold text-content ">2023.12.26 (화)</div>
					<div className="text-sm">15: 00</div>
				</div>
				<div className="flex flex-col w-1/2 ">
					<div className="text-xxsm text-textGray">체크아웃</div>
					<div className="font-semibold text-content ">2023.12.29 (금)</div>
					<div className="text-sm">19: 00</div>
				</div>
			</div>
			<div className="text-xxsm text-textGray flex items-center py-2">
				<PersonOutlineRoundedIcon sx={{ fontSize: '1rem' }} /> 기준 2명 / 최대
				15명
			</div>
			<div>
				<div className="flex justify-end items-center content-center">
					<div className="text-sm text-textGray pr-1">연박 / 3박</div>
					<div className="font-semibold ">870,000 원</div>
				</div>
			</div>
		</div>
	);
};

export default ReservationItem;
