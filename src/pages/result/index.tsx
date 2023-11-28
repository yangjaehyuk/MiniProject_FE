import React, { useState, useEffect } from 'react';
// import Header from 'components/common/Header';
import CommonHeader from 'components/common/CommonHeader';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ResultFooter from 'components/Footer/ResultFooter';
import { useNavigate } from 'react-router-dom';
import { getOrderCheck } from 'apis/cartAPI';
import { useRecoilValue } from 'recoil';
import { orderIdState } from 'recoil/atoms/orderAtom';
import { OrderData, OrderItems } from 'types/Orders';
import swal from 'sweetalert';
import { requireLogin } from 'hooks/common/isAcessToken';
import styles from '../../components/cart/Cart.module.css';

const result = () => {
	requireLogin();
	const navigate = useNavigate();

	// recoil로 id 받아오기
	const orderId = useRecoilValue(orderIdState);

	// 주문 결과 데이터
	const [orderData, setOrderData] = useState<OrderData>();

	// 주문 객실 상품 데이터
	const [orderItem, setOrderItem] = useState<OrderItems>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await getOrderCheck(orderId);

				// setData(result);
				setOrderData(res.data);
				setOrderItem(res.data.orderItems);
			} catch (error) {
				console.error('Error fetching data:', error);
				swal({ title: '예상치 못한 오류가 발생했습니다.', icon: 'error' });
			}
		};

		fetchData();
	}, []);

	// 예약 날짜 시간

	// console.log(orderData);
	// console.log(orderItem);

	return (
		<>
			{orderData && orderItem && (
				<div>
					<CommonHeader name="주문 결과" isHomeIcon />
					{/* <Header title="주문 결과" /> */}
					<div className="bg-white fixed left-0 top-[48px] w-screen drop-shadow-sm">
						<div className="flex h-[48px] justify-center items-center px-4  w-[768px]  m-auto top-0   left-0">
							<div className="flex flex-col justify-center items-center ">
								<div className=" font-semibold text-content">
									예약이 완료되었습니다.
								</div>
								<div className=" text-sm">
									예약 일시:{orderData.orderTime} (화) 11:34
								</div>
							</div>
						</div>
					</div>

					<div className={styles.subWrap}>
						<div>
							<div className="flex justify-between items-center">
								<div className="text-content font-semibold">
									상품 정보 {orderData.orderItems.length}건
								</div>
								<ExpandMoreOutlinedIcon />
							</div>
							{orderData.orderItems.map((item) => (
								<div key={item.id} className="border-b border-bgGray  mb-2">
									<div className="text-xxsm text-textGray py-2">
										숙소 예약 번호
									</div>
									<div>
										<div className="text-content font-semibold">
											{item.accommodation.name}
										</div>
										<div className="flex">
											<div>
												<img
													className="h-20 w-20  rounded-sm"
													src={item.accommodation.image}
												></img>
											</div>
											<div className="flex flex-col pl-3">
												<div className="text-md">
													객실 정보 {item.roomType.name}
												</div>
												<div className="text-xs ">
													{item.checkinDate}(수) ~ {item.checkoutDate}(목) | 1박
												</div>
												<div className="text-xxsm text-textGray pb-3">
													체크인 15:00 | 체크아웃 11:00
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className={styles.subWrap}>
						<div className="flex justify-between items-center py-3">
							<div className="text-content font-semibold "> 예약자 정보</div>
							<ExpandMoreOutlinedIcon />
						</div>

						<div className="flex justify-between items-center py-1">
							<div className="text-md">이름</div>
							<div className="text-md"> {orderData.subscriber.name}</div>
						</div>
						<div className="flex justify-between items-center py-2">
							<div className="text-md">휴대폰 번호</div>
							<div className="text-md"> {orderData.subscriber.phoneNumber}</div>
						</div>
					</div>
					<div className={styles.subWrap}>
						<div className="flex justify-between items-center py-3">
							<div className="text-content font-semibold "> 이용자 정보</div>
							<ExpandMoreOutlinedIcon />
						</div>

						<div className="flex justify-between items-center py-1">
							<div className="text-md">이름</div>
							<div className="text-md"> {orderData.client.name}</div>
						</div>
						<div className="flex justify-between items-center py-2">
							<div className="text-md">휴대폰 번호</div>
							<div className="text-md"> {orderData.client.phoneNumber}</div>
						</div>
					</div>
					<div className={styles.subWrap}>
						<div className="text-content font-semibold py-3 "> 예약 정보</div>

						<div className="flex justify-between items-center py-1">
							<div className="text-md">통합 주문번호</div>
							<div className="text-md">{orderData.reservationInfo.code}</div>
						</div>

						<div className="flex justify-between items-center py-2">
							<div className="text-md">결제 수단</div>
							<div className="text-md">
								{orderData.reservationInfo.paymentMethod}
							</div>
						</div>
					</div>
					<div className={styles.subWrap}>
						<div className="text-content font-semibold py-3 "> 결제 금액</div>

						<div className="flex justify-between items-center py-1">
							<div className="text-md">상품 금액</div>
							<div className="text-md"> {orderData.totalPrice} 원</div>
						</div>
					</div>
					<div className={styles.subWrap}>
						<div className="flex justify-between items-center py-1">
							<div className="text-md">총 결제 금액</div>
							<div className="text-title font-semibold py-3 ">
								{orderData.totalPrice} 원
							</div>
						</div>
					</div>

					<div className="w-[768px] m-auto top-0 left-0 py-5">
						<button
							onClick={() => {
								navigate('/');
							}}
							className="flex font-semibold text-content justify-center items-center w-full py-5 px-3 text-center bg-secondary rounded-md h-[20px]  text-white"
						>
							홈으로
						</button>
					</div>
				</div>
			)}

			<ResultFooter />
		</>
	);
};

export default result;
