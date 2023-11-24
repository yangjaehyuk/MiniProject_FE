import React, { useState } from 'react';
import bannerRed from '../../assets/images/bannerRed.png';
import { ArrowDropDown } from '@mui/icons-material';
import CategoryModal from './CategoryModal';
import DateModal from './DateModal';
import { useRecoilValue } from 'recoil';
import { categoryState, dateState } from 'recoil/atoms/myPageAtom';
import ReservationCard from './ReservationCard';

const Inner = () => {
	const [showCategoryModal, setShowCategoryModal] = useState(false);
	const [showDateModal, setShowDateModal] = useState(false);
	const nowCategory = useRecoilValue(categoryState);
	const nowDate = useRecoilValue(dateState);
	console.log(nowCategory, nowDate);
	const handleCategoryModalClose = () => {
		setShowCategoryModal(false);
	};
	const handleDateModalClose = () => {
		setShowDateModal(false);
	};
	return (
		<div className="pt-20 min-h-screen m-auto bg-white max-w-[768px] mx-auto">
			<div className="pt-4.5 pl-6 pr-6 pb-7">
				<div className="flex justify-between items-center">
					<div className="text-content font-bold text-black cursor-default">
						여기에 사용자 이름
					</div>
					<a
						className="pt-1 cursor-pointer"
						rel="noreferrer"
						href="/"
						style={{ border: '1px solid #ccc', padding: 3 }}
					>
						<p className="text-xxsm text-textGray">로그아웃</p>
					</a>
				</div>

				<div className="text-md text-textGray pt-3 cursor-default">
					여기에 사용자 이메일
				</div>
				<div className="mt-[48px]">
					<img
						src={bannerRed}
						alt="bannerRed"
						className="w-full cursor-pointer"
						style={{ borderRadius: 10 }}
						onClick={() => {
							window.location.href =
								'https://www.yanolja.com/promotion/nol-promotion?eventcode=NOYLN';
						}}
					/>
					<div className="font-bold text-title pt-10 cursor-default">
						예약 내역
					</div>

					<div className="flex pt-7">
						<div
							className="flex items-center w-1/2 h-9 border border-gray rounded-md cursor-pointer justify-between hover:bg-lightGray"
							onClick={() => setShowCategoryModal(true)}
						>
							{nowCategory}
							<ArrowDropDown />
						</div>

						<div
							className="flex items-center w-1/2 h-9 border border-gray rounded-md cursor-pointer justify-between ml-3 hover:bg-lightGray"
							onClick={() => setShowDateModal(true)}
						>
							{nowDate}
							<ArrowDropDown />
						</div>
					</div>
				</div>
			</div>
			<CategoryModal
				open={showCategoryModal}
				onClose={handleCategoryModalClose}
			></CategoryModal>
			<DateModal
				open={showDateModal}
				onClose={handleDateModalClose}
			></DateModal>
			<ReservationCard />
		</div>
	);
};

export default Inner;
