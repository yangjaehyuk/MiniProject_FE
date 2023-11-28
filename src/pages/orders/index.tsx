import Header from 'components/common/Header';
import React, { useState } from 'react';
import styles from 'components/cart/Cart.module.css';
import OrdersNotice from 'components/orders/OrdersNotice';
import ReservationItem from 'components/orders/ReservationItem';
import PaymentMethod from 'components/orders/PaymentMethod';
import PaymentNotice from 'components/orders/PaymentNotice';
import { FormProvider, useForm } from 'react-hook-form';
import {
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
	useResetRecoilState,
} from 'recoil';
import { cartItemState, totalPriceState } from 'recoil/atoms/cartAtom';
import UserInfo from 'components/orders/UserInfo';
import TermsAgreement from 'components/orders/TermsAgreement';
import { isConstructorDeclaration } from 'typescript';
import { postOrder } from 'apis/cartAPI';
import { PostOrderItem, PostClient, PostSubscriber } from 'types/Orders';
import { orderItemState } from 'recoil/atoms/orderAtom';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { orderIdState } from 'recoil/atoms/orderAtom';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { requireLogin } from 'hooks/common/isAcessToken';

// ReservationInfo
export type ReservationInfo = {
	reservationName: string;
	reservationNumber: string;
	userName: string;
	userNumber: string;
	paymentMethod?: string;
	selectAllCheckbox: boolean;
	requiredCheckbox1?: boolean;
	requiredCheckbox2?: boolean;
	requiredCheckbox3?: boolean;
	optionalCheckbox1?: boolean;
	optionalCheckbox2?: boolean;
	allAgreementCheckbox?: boolean;
};

// type CartItemStateType = typeof cartItemState;

const orders = () => {
	requireLogin();
	const navigate = useNavigate();

	// 장바구니에서 예약 데이터
	const cartItem = useRecoilValue(cartItemState);
	const totalPrice = useRecoilValue(totalPriceState);

	// 객실 상세에서 예약 데이터
	const [orderItem, setOrderItem] = useRecoilState(orderItemState);
	const checkInDate = useRecoilValue(checkInDateState);
	const checkOutDate = useRecoilValue(checkOutDateState);

	const StringOrderItem = orderItem?.id.toString();
	const StringCheckInDate = checkInDate.toISOString();
	const StringCheckOutDate = checkOutDate.toISOString();

	// 주문결과 id값 받는 recoil
	const orderIdHandler = useSetRecoilState(orderIdState);

	const methods = useForm<ReservationInfo>({ mode: 'onChange' });

	const orderData: PostOrderItem[] = orderItem
		? [
				{
					roomTypeId: StringOrderItem || '',
					checkinDate: StringCheckInDate,
					checkoutDate: StringCheckOutDate,
				},
		  ]
		: cartItem.map((cartItem) => ({
				roomTypeId: cartItem.roomType.id.toString(),
				checkinDate: cartItem.checkinDate,
				checkoutDate: cartItem.checkoutDate,
		  }));

	// 결제하기 버튼
	const onSubmit = async (data: ReservationInfo) => {
		const client = { name: data.userName, phoneNumber: data.userNumber };
		const subscriber = {
			name: data.reservationName,
			phoneNumber: data.reservationNumber,
		};

		console.log(
			'payment',
			payment,
			'client',
			client,
			'subscriber',
			subscriber,
			'orderData',
			orderData,
		);

		try {
			if (client && subscriber && payment && orderData) {
				const res = await postOrder(client, subscriber, payment, orderData);
				console.log('res', res);

				// 리코일로 주문 id 값 넣어주기
				orderIdHandler(res.data.orderId);
				setOrderItem(null);

				if (res.success === true) {
					swal({ title: '결제하기에 성공하셨습니다.', icon: 'success' });
					navigate('/result');
				} else {
					// res.success 가 false 인 경우에 대한 에러 핸들링
					// res.error 객체로부터 메시지를 추출하여 사용자에게 보여줌
					if (res.error) {
						const errorMessage = res.error.message;
						swal({ title: errorMessage, icon: 'error' });
					} else {
						swal({ title: '알 수 없는 오류가 발생했습니다.', icon: 'error' });
					}
					navigate('/cart');
				}
			} else {
				console.log('모든 데이터를 만족시켜주세요.');
			}
		} catch (e) {
			// 네트워크 오류 등 예상치 못한 오류를 캐치하여 사용자에게 알림
			console.error(e);
			swal({ title: '예상치 못한 오류가 발생했습니다.', icon: 'error' });
			navigate('/cart');
		}
	};

	const [payment, setPayment] = useState('');
	const [checkbox, setCheckbox] = useState(false);

	const handlePayment = (newPayment: string) => {
		setPayment(newPayment);
	};

	return (
		<>
			<FormProvider {...methods}>
				<Header title="예약" />

				<div className={styles.wrap}>
					<div className="font-semibold text-md pb-2">숙소</div>
					<OrdersNotice />
					<ReservationItem />
				</div>
				<UserInfo />

				<div className={styles.wrap}>
					<div className="font-semibold text-md pb-2">결제 금액</div>
					<div className="flex justify-between items-center text-textGray text-sm pt-2 pb-5 border-dashed  border-b-2 border-borderGray">
						<div>상품 금액</div>
						<div className="text-secondaryTextGray">
							{orderItem ? orderItem.price : totalPrice}원
						</div>
					</div>
					<div className="flex justify-between items-center py-2">
						<div className="font-semibold text-content"> 총 결제 금액</div>
						<div className="font-semibold text-title text-secondary">
							{orderItem ? orderItem.price : totalPrice}원
						</div>
					</div>
				</div>
				<div className={styles.wrap}>
					<PaymentMethod handlePayment={handlePayment} />
				</div>
				<div className={styles.wrap}>
					<PaymentNotice />
					<TermsAgreement setCheckbox={setCheckbox} />
					<div>
						<div className="text-textGray text-xxsm mt-2 py-2">
							이용규칙, 취소 및 환불 규칙 동의하실 경우 결제하기를 클릭해주세요.
						</div>
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							{checkbox ? (
								<button
									type="submit"
									className="flex font-semibold text-content justify-center items-center w-full py-5 text-center bg-secondary rounded-md h-[20px]  text-white"
								>
									{orderItem ? orderItem.price : totalPrice}원 결제하기
								</button>
							) : (
								<button
									disabled
									className="flex font-semibold text-content justify-center items-center w-full py-5 text-center bg-textGray rounded-md h-[20px]  text-white"
								>
									{orderItem ? orderItem.price : totalPrice}원 결제하기
								</button>
							)}
						</form>
						<div className="text-textGray text-xxsm mt-2">
							(주)야놀자는 통신판매중개업자로서, 통신판매의 당사자가 아니라는
							사실을 고지하며 상품의 결제, 이용 및 환불 등과 관련한 의무와
							책임은 각 판매자에게 있습니다.
						</div>
					</div>
				</div>
			</FormProvider>
		</>
	);
};

export default orders;
