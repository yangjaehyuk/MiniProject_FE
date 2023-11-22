import Header from 'components/common/Header';
import React from 'react';
import styles from '../../components/cart/Cart.module.css';
import OrdersNotice from 'components/orders/OrdersNotice';
import ReservationItem from 'components/orders/ReservationItem';
import PaymentMethod from 'components/orders/PaymentMethod';
import PaymentNotice from 'components/orders/PaymentNotice';
import DoneIcon from '@mui/icons-material/Done';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
const orders = () => {
	return (
		<>
			<Header title="예약" />

			<div className={styles.wrap}>
				<div className="font-semibold text-md pb-2">숙소</div>
				<OrdersNotice />
				<ReservationItem />
			</div>
			<div className={styles.wrap}>
				<div className="font-semibold text-md pb-2">예약자 정보</div>
			</div>
			<div className={styles.wrap}>
				<div className="font-semibold text-md pb-2">이용자 정보</div>
			</div>
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
				<PaymentMethod />
			</div>
			<div className={styles.wrap}>
				<PaymentNotice />
				<div className="py-6">
					<div className="flex items-center  mb-3">
						<CheckBoxOutlinedIcon color="disabled" />
						<div
							className="
            font-semibold pl-2 "
						>
							필수 약관 전체 동의
							<CheckBoxIcon color="primary" fontSize="small" />
						</div>
					</div>
					<div className="flex items-center py-2">
						<DoneIcon color="primary" fontSize="small" />

						<div className="text-textGray text-sm pl-2">
							[필수] 만 14세 이상 이용 동의
						</div>
					</div>

					<div className="flex items-center py-2">
						<DoneIcon color="disabled" fontSize="small" />

						<div className="text-textGray text-sm pl-2">
							[필수] 개인정보 수집 및 이용
						</div>
					</div>
					<div className="flex items-center py-2">
						<DoneIcon color="disabled" fontSize="small" />

						<div className="text-textGray text-sm pl-2">
							[필수] 개인정보 수집 및 이용
						</div>
					</div>
					<div className="flex items-center py-2">
						<DoneIcon color="disabled" fontSize="small" />

						<div className="text-textGray text-sm pl-2">
							[선택] 이벤트, 혜택 정보 수신 동의
						</div>
					</div>
					<div className="flex items-center py-2">
						<DoneIcon color="disabled" fontSize="small" />

						<div className="text-textGray text-sm pl-2">
							[선택] 이벤트, 혜택 정보 전송을 위한 개인정보 수집 및 이용 동의
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default orders;
