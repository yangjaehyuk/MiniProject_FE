import Header from 'components/common/Header';
import React, { useState } from 'react';
import styles from '../../components/cart/Cart.module.css';
import OrdersNotice from 'components/orders/OrdersNotice';
import ReservationItem from 'components/orders/ReservationItem';
import PaymentMethod from 'components/orders/PaymentMethod';
import PaymentNotice from 'components/orders/PaymentNotice';
import { FormProvider, useForm } from 'react-hook-form';

import UserInfo from 'components/orders/UserInfo';
import TermsAgreement from 'components/orders/TermsAgreement';
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

const orders = () => {
	const methods = useForm({ mode: 'onChange' });
	const onSubmit = () => console.log('ddd');

	const [payment, setPayment] = useState('');
	const [checkbox, setCheckbox] = useState(false);

	const handlePayment = (newPayment: string) => {
		setPayment(newPayment);
		console.log('payment', payment);
	};

	console.log(payment);
	console.log('checkbox: ', checkbox);

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
						<div className="text-secondaryTextGray">870,000원</div>
					</div>
					<div className="flex justify-between items-center py-2">
						<div className="font-semibold text-content"> 총 결제 금액</div>
						<div className="font-semibold text-title text-secondary">
							870,000 원
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
								<button className="flex font-semibold text-content justify-center items-center w-full py-5 text-center bg-secondary rounded-md h-[20px]  text-white">
									870,000원 결제하기
								</button>
							) : (
								<button
									disabled
									className="flex font-semibold text-content justify-center items-center w-full py-5 text-center bg-textGray rounded-md h-[20px]  text-white"
								>
									870,000원 결제하기
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
