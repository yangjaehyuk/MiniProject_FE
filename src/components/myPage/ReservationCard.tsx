import React from 'react';

const ReservationCard = () => {
	const reservationStatusText = '이용완료';
	return (
		<div className="w-full border-2 border-gray rounded-md cursor-pointer">
			<div className="text-bold text-title w-full border-b-2 border-gray p-4">
				여기는 예약 날짜
			</div>
			<div className="pl-4 pt-3 pb-1 text-textGray text-content">
				숙소 예약번호: 여기는 숙소 예약번호
			</div>
			<div className="pl-4 pt-3 pb-1 flex">
				<img
					className="h-[80px] w-[80px] rounded-md"
					src="https://yaimg.yanolja.com/v5/2023/11/04/09/654608a0ea9055.08741262.jpg"
				></img>
				<div>
					<div className="pl-4">
						<div
							className="p-1 border border-gray bg-gray text-white rounded-sm text-sm"
							style={{ width: '57.6px' }}
						>
							이용완료
						</div>
						<div className="text-title pt-0.5 pb-0.5">여긴 숙소 이름</div>
						<div className="text-content pt-0.5 pb-0.5">여긴 객실 이름</div>
						<div className="text-content pt-0.5 pb-0.5">
							여긴 체크인(요일) ~ 여긴 체크아웃(요일) | 몇 박?
						</div>
						<div className="text-content text-textGray pt-0.5 pb-0.5">
							체크인 15:00|체크아웃 11:00
						</div>
						<div className="text-content text-textGray pt-0.5 pb-0.5">
							여긴 최대인원수
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReservationCard;
