import React, { useEffect, useState } from 'react';
import bannerRed from '../../assets/images/bannerRed.png';
import { ArrowDropDown } from '@mui/icons-material';
import CategoryModal from './CategoryModal';
import DateModal from './DateModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, dateState } from 'recoil/atoms/myPageAtom';
import ReservationCard from './ReservationCard';
import { logout } from 'utils';
import { useNavigate } from 'react-router-dom';
import { getUserInfo, getUserOrderInfo } from 'apis/axios';
import { useQuery } from 'react-query';

import TopBtn from 'components/common/TopBtn';
import useScrollToShow from 'hooks/common/handleScroll';

const Inner = () => {
	const navigate = useNavigate();
	const [showCategoryModal, setShowCategoryModal] = useState(false);
	const [showDateModal, setShowDateModal] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [list, setList] = useState(0);
	const nowCategory = useRecoilValue(categoryState);
	const nowDate = useRecoilValue(dateState);
	const [category, setCategory] = useRecoilState(categoryState);
	const [date, setDate] = useRecoilState(dateState);

	const show = useScrollToShow(false, 200);

	const handleCategoryModalClose = () => {
		setShowCategoryModal(false);
	};
	const handleDateModalClose = () => {
		setShowDateModal(false);
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await getUserInfo();
				const { email, name } = res;
				setName(name);
				setEmail(email);
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await getUserOrderInfo();
				for (let i = 0; i < res.data.length; i++) {
					const orderItems = res.data[i].orderItems;
					// setList((prevList) => prevList.concat(orderItems));
				}
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="pt-20 min-h-screen m-auto bg-white max-w-[768px] mx-auto">
			<div className="pt-4.5 pl-6 pr-6 pb-7">
				<div className="flex justify-between items-center">
					<div className="text-content font-bold text-black cursor-default">
						{name}
					</div>

					<div
						className="text-xxsm text-textGray cursor-pointer"
						onClick={() => {
							logout();
							setCategory('카테고리 전체');
							setDate('최근 3개월');
							navigate('/');
						}}
					>
						로그아웃
					</div>
				</div>
				<div className="text-md text-textGray pt-3 cursor-default">{email}</div>
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
			{show && <TopBtn show={show} />}
			{list > 0 && (
				<div>
					{Array.from({ length: list }, (_, index) => (
						<React.Fragment key={index}>
							<ReservationCard />
							{index < list - 1 && <div className="pb-10"></div>}
						</React.Fragment>
					))}
				</div>
			)}
		</div>
	);
};

export default Inner;
