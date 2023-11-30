import React, { useState } from 'react';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const OrdersNotice = () => {
	const [isClick, setIsClick] = useState(false);

	const handleClick = () => {
		setIsClick((prev) => !prev);
	};

	console.log(isClick);
	return (
		<>
			<div className="flex flex-col bg-lightGray rounded-sm px-4 py-3">
				<div className="flex justify-between items-center">
					<div className="font-semibold text-xs">
						예약 완료 후 무료 취소 안내
					</div>
					{isClick ? (
						<ExpandLessRoundedIcon
							onClick={handleClick}
							className="cursor-pointer"
						/>
					) : (
						<ExpandMoreOutlinedIcon
							onClick={handleClick}
							className="cursor-pointer"
						/>
					)}
				</div>
				<div>
					{isClick && (
						<>
							<div className=" border-b border-gray py-2  text-xxsm text-textGray mb-2">
								<p>
									예약일시 기준 체크인 시각 이전일 경우 무료취소가 가능합니다.
								</p>
								<p>숙소 정책에 따라 일부 상품은 무료취소가 불가능합니다.</p>
							</div>
							<div className="flex justify-start mr-4">
								<div className=" text-xs pr-1  text-textGray">호텔/펜션</div>
								<div>
									<div className="font-semibold text-xs">
										10분 이내 무료 취소
									</div>
									<div className=" text-xxsm  text-textGray">
										(단, 숙소 정책에 따라 취소수수료 부가 예외 규정이 적용되지
										않을 수 있습니다.)
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default OrdersNotice;
