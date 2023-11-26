import React from 'react';
import styles from '../../components/cart/Cart.module.css';
import BottomInfo from './BottomInfo';

const CartBottom = () => {
	return (
		<div>
			{' '}
			<div className={styles.wrap}>
				<div className="mt-[12px] px-[20px] py-[40px]  bg-white ">
					<div className="text-content font-semibold mb-4">예약 상품</div>
					<div className=" text-sm text-text ">
						<div className="flex justify-between items-center">
							<div>상품금액</div>
							<div>870,000 원</div>
						</div>
						<div className="flex justify-between items-center mt-3">
							<div>결제 예상 금액</div>
							<div className="text-[16px] font-semibold ">870,000 원</div>
						</div>

						<BottomInfo />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartBottom;
