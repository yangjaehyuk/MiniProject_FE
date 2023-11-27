import React, { useEffect, useState } from 'react';
import bannerRed from '../../assets/images/bannerRed.png';
import { ArrowDropDown } from '@mui/icons-material';
import DateModal from './DateModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dateState } from 'recoil/atoms/myPageAtom';
import ReservationCard from './ReservationCard';
import ReservationCardHeader from './ReservationCardHeader';
import { logout } from 'utils';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from 'apis/axios';
import CategorySkeleton from 'components/category/skeleton/CategorySkeleton';

import TopBtn from 'components/common/TopBtn';
import useScrollToShow from 'hooks/common/handleScroll';
import useQueryMyPage from 'hooks/myPage/useQueryMyPage';

const Inner = () => {
	const { data } = useQueryMyPage();

	const navigate = useNavigate();
	const [showDateModal, setShowDateModal] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const nowDate = useRecoilValue(dateState);
	const [date, setDate] = useRecoilState(dateState);

	const show = useScrollToShow(false, 200);

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
	if (!data) return <CategorySkeleton />;
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
							className="flex items-center w-full h-9 border border-gray rounded-md cursor-pointer justify-between ml-3 hover:bg-lightGray"
							onClick={() => setShowDateModal(true)}
						>
							{nowDate}
							<ArrowDropDown />
						</div>
					</div>
				</div>
			</div>

			<DateModal
				open={showDateModal}
				onClose={handleDateModalClose}
			></DateModal>
			{show && <TopBtn show={show} />}
			{data?.length > 0 && (
				<div>
					{data?.map((order, index) => (
						<React.Fragment key={index}>
							<ReservationCardHeader orderDate={order.orderDate} />
							{order.orderItems?.map((item, itemIndex) => (
								<React.Fragment key={itemIndex}>
									<ReservationCard
										code={item.code}
										accomodationName={item.accommodation.name}
										accomodationImage={item.accommodation.image}
										checkinDate={item.checkinDate}
										checkoutDate={item.checkoutDate}
										isUsed={item.isUsed}
										accomodationId={item.accommodation.id}
										capacity={item.roomType.capacity}
										roomName={item.roomType.name}
									/>
								</React.Fragment>
							))}
							<div className="pb-16"></div>
						</React.Fragment>
					))}
				</div>
			)}
		</div>
	);
};

export default Inner;
