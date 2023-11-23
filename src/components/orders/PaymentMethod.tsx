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
		register,
		formState: { errors },
	} = useFormContext();

	const [selectedPayment, setSelectedPayment] = useState('');

	const handlePaymentClick = (paymentName: string) => {
		setSelectedPayment(paymentName);
		handlePayment(paymentName);
		console.log('selectedPayment', selectedPayment);
	};
	return (
		<>
			<div>
				<img src={banner} alt="banner Kakao " />
			</div>
			<div className="font-semibold text-content pb-2 pb-5">결제 수단</div>
			<div className="flex flex-col ">
				<button
					onClick={() => handlePaymentClick('카카오페이')}
					type="button"
					className=" flex items-center justify-center border-solid border-[1px] h-[48px] border-gray rounded-sm "
				>
					<img src={Kakao} className="h-6" alt="Kakao Logo" />
				</button>
				<div className="flex justify-between items-center ">
					<div className="flex flex-col w-1/2 ">
						<button
							onClick={() => handlePaymentClick('네이버페이')}
							type="button"
							className=" mt-3 flex items-center justify-center mr-3  border-solid border-[1px] h-[48px] border-gray rounded-sm "
						>
							<img src={Naver} className="h-6" alt="Kakao Logo" />
						</button>

						<button
							onClick={() => handlePaymentClick('카드')}
							type="button"
							className=" mt-3 flex items-center justify-center mr-3 border-solid border-[1px] h-[48px] border-gray rounded-sm "
						>
							<div className="text-sm"> 카드 </div>
						</button>
						<button
							onClick={() => handlePaymentClick('페이코')}
							type="button"
							className="mt-3 flex items-center justify-center mr-3 border-solid border-[1px] h-[48px] border-gray rounded-sm "
						>
							<img src={Payco} className="h-5" alt="Kakao Logo" />
						</button>
						<button
							onClick={() => handlePaymentClick('스마일페이')}
							type="button"
							className="mt-3 flex items-center justify-center mr-3 border-solid border-[1px] h-[48px] border-gray rounded-sm "
						>
							<img src={Smile} className="h-6" alt="Kakao Logo" />
						</button>
						<button
							onClick={() => handlePaymentClick('L.PAY')}
							type="button"
							className="mt-3 flex items-center justify-center mr-3 border-solid border-[1px] h-[48px] border-gray rounded-sm "
						>
							<img src={Lpay} className="h-5" alt="Kakao Logo" />
						</button>
					</div>
					<div className="flex flex-col w-1/2">
						<button
							onClick={() => handlePaymentClick('토스페이')}
							type="button"
							className="mt-3 flex items-center justify-center ml-3 border-solid border-[1px] h-[48px] border-gray rounded-sm "
						>
							<img src={Toss} className="h-5" alt="Kakao Logo" />
						</button>
						<button
							onClick={() => handlePaymentClick('KB 페이')}
							type="button"
							className="mt-3 flex items-center justify-center ml-3 border-solid border-[1px] h-[48px] border-gray rounded-sm "
						>
							<img src={KB} className="h-6" alt="Kakao Logo" />
						</button>
						<button
							onClick={() => handlePaymentClick('휴대폰')}
							type="button"
							className="mt-3 flex items-center justify-center ml-3 border-solid border-[1px] h-[48px] border-gray rounded-sm "
						>
							<div className="text-sm"> 휴대폰 </div>
						</button>
						<button
							onClick={() => handlePaymentClick('SSG페이')}
							type="button"
							className="mt-3 flex items-center justify-center ml-3 border-solid border-[1px] h-[48px] border-gray rounded-sm "
						>
							<img src={Ssg} className="h-5" alt="Kakao Logo" />
						</button>
						<button
							onClick={() => handlePaymentClick('실시간계좌이체')}
							type="button"
							className="mt-3 flex items-center justify-center ml-3 border-solid border-[1px] h-[48px] border-gray rounded-sm "
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
