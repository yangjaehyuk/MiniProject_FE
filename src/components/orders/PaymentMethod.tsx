import React, { useState } from 'react';
import Ssg from '../../assets/images/ssg.svg';
import KB from '../../assets/images/kb.svg';
import Naver from '../../assets/images/naver.svg';
import Toss from '../../assets/images/toss.svg';
import Kakao from '../../assets/images/kakao.svg';
import Payco from '../../assets/images/payco.svg';
import Smile from '../../assets/images/smile.svg';
import Lpay from '../../assets/images/L.pay.svg';
import banner from '../../assets/images/bannerKakao.svg';
import { useFormContext } from 'react-hook-form';

type PaymentMethodProps = {
	handlePayment: (newPayment: string) => void;
};

const PaymentMethod: React.FC<PaymentMethodProps> = ({ handlePayment }) => {
	const {
		formState: { errors },
	} = useFormContext();

	const [selectedPayment, setSelectedPayment] = useState('');

	const handlePaymentClick = (paymentName: string) => {
		setSelectedPayment(paymentName);
		handlePayment(paymentName);
		console.log('selectedPayment', selectedPayment);
	};

	//  버튼 디자인
	const getButtonClassName = (paymentName: string) => {
		return `flex items-center justify-center border-solid border-[1px] h-[48px] rounded-sm mx-2 mb-3 hover:bg-bgGray ${
			selectedPayment === paymentName
				? 'bg-hoverBg border-blue '
				: 'border-gray '
		}`;
	};

	return (
		<>
			<div>
				<img src={banner} alt="banner Kakao " />
			</div>
			<div className="font-semibold text-content pb-2 pb-5">결제 수단</div>
			<div className="flex flex-col ">
				<button
					onClick={() => handlePaymentClick('KAKAO_PAY')}
					type="button"
					className={getButtonClassName('KAKAO_PAY')}
				>
					<img src={Kakao} className="h-6" alt="Kakao Logo" />
				</button>
				<div className="flex justify-between items-center ">
					<div className="flex flex-col w-1/2 ">
						<button
							onClick={() => handlePaymentClick('NAVER_PAY')}
							type="button"
							className={getButtonClassName('NAVER_PAY')}
						>
							<img src={Naver} className="h-6" alt="NAVER_PAY" />
						</button>

						<button
							onClick={() => handlePaymentClick('CARD')}
							type="button"
							className={getButtonClassName('CARD')}
						>
							<div className="text-sm"> 카드 </div>
						</button>
						<button
							onClick={() => handlePaymentClick('PAYCO')}
							type="button"
							className={getButtonClassName('PAYCO')}
						>
							<img src={Payco} className="h-5" alt="PAYCO" />
						</button>
						<button
							onClick={() => handlePaymentClick('SMILE_PAY')}
							type="button"
							className={getButtonClassName('SMILE_PAY')}
						>
							<img src={Smile} className="h-6" alt="SMILE_PAY" />
						</button>
						<button
							onClick={() => handlePaymentClick('L_PAY')}
							type="button"
							className={getButtonClassName('L_PAY')}
						>
							<img src={Lpay} className="h-5" alt="L_PAY" />
						</button>
					</div>
					<div className="flex flex-col w-1/2">
						<button
							onClick={() => handlePaymentClick('TOSS_PAY')}
							type="button"
							className={getButtonClassName('TOSS_PAY')}
						>
							<img src={Toss} className="h-5" alt="TOSS_PAY" />
						</button>
						<button
							onClick={() => handlePaymentClick('KB_PAY')}
							type="button"
							className={getButtonClassName('KB_PAY')}
						>
							<img src={KB} className="h-6" alt="KB_PAY" />
						</button>
						<button
							onClick={() => handlePaymentClick('PHONE')}
							type="button"
							className={getButtonClassName('PHONE')}
						>
							<div className="text-sm"> 휴대폰 </div>
						</button>
						<button
							onClick={() => handlePaymentClick('SSG_PAY')}
							type="button"
							className={getButtonClassName('SSG_PAY')}
						>
							<img src={Ssg} className="h-5" alt="SSG_PAY" />
						</button>
						<button
							onClick={() => handlePaymentClick('ACCOUNT')}
							type="button"
							className={getButtonClassName('ACCOUNT')}
						>
							<div className="text-sm"> 실시간계좌이체 </div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default PaymentMethod;
