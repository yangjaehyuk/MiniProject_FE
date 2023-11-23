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
import { Input } from '@material-tailwind/react';

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
				<div className="font-semibold text-md pb-2 mb-3">예약자 정보</div>
				<div className="flex flex-col gap-6">
					<Input
						variant="static"
						label="성명"
						placeholder="성명을 입력해주세요."
						size="md"
						crossOrigin
					/>
					<Input
						variant="static"
						label="휴대폰 번호 "
						placeholder="휴대폰 번호를 입력해주세요."
						crossOrigin
					/>
				</div>
			</div>
			<div className={styles.wrap}>
				<div className="font-semibold text-md pb-2">이용자 정보</div>
				<div className="bg-bgGray text-xs h-8 text-textGray pl-3 flex items-center">
					상품 이용 시 필요한 필수 정보입니다.
				</div>
				<div className="flex mt-3">
					<CheckBoxOutlinedIcon color="disabled" fontSize="small" />
					<div className="text-md"> 예약자 정보와 동일합니다.</div>
				</div>
				<div className="flex flex-col gap-6 mt-6">
					<Input
						variant="static"
						label="성명"
						placeholder="성명을 입력해주세요."
						size="md"
						crossOrigin
					/>
					<Input
						variant="static"
						label="휴대폰 번호 "
						placeholder="휴대폰 번호를 입력해주세요."
						crossOrigin
					/>
				</div>
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
				<div>
					<div className="text-textGray text-xxsm mt-2 py-2">
						이용규칙, 취소 및 환불 규칙 동의하실 경우 결제하기를 클릭해주세요.
					</div>
					<button className="flex font-semibold text-content justify-center items-center w-full py-5 text-center bg-secondary rounded-md h-[20px]  text-white">
						870,000원 결제하기
					</button>
					<div className="text-textGray text-xxsm mt-2">
						(주)야놀자는 통신판매중개업자로서, 통신판매의 당사자가 아니라는
						사실을 고지하며 상품의 결제, 이용 및 환불 등과 관련한 의무와 책임은
						각 판매자에게 있습니다.
					</div>
				</div>
			</div>
		</>
	);
};

export default orders;
