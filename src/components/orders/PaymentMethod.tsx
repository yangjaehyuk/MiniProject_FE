import React from 'react';
import Ssg from '../../assets/images/ssg.svg';
import KB from '../../assets/images/kb.svg';
import Naver from '../../assets/images/naver.svg';
import Toss from '../../assets/images/toss.svg';
import Kakao from '../../assets/images/kakao.svg';
import Payco from '../../assets/images/payco.svg';
import Smile from '../../assets/images/smile.svg';
import Lpay from '../../assets/images/L.pay.svg';
import banner from '../../assets/images/bannerKakao.svg';

const PaymentMethod = () => {
	return (
		<>
			<div>
				<img src={banner} alt="banner Kakao " />
			</div>
			<div className="font-semibold text-content pb-2 pb-5">결제 수단</div>
			<div className="flex flex-col ">
				<button className=" flex items-center justify-center border-solid border-[1px] h-[48px] border-gray rounded-sm ">
					<img src={Kakao} className="h-6" alt="Kakao Logo" />
				</button>
				<div className="flex justify-between items-center ">
					<div className="flex flex-col w-1/2 ">
						<button className=" mt-3 flex items-center justify-center mr-3  border-solid border-[1px] h-[48px] border-gray rounded-sm ">
							<img src={Naver} className="h-6" alt="Kakao Logo" />
						</button>

						<button className=" mt-3 flex items-center justify-center mr-3 border-solid border-[1px] h-[48px] border-gray rounded-sm ">
							<div className="text-sm"> 카드 </div>
						</button>
						<button className="mt-3 flex items-center justify-center mr-3 border-solid border-[1px] h-[48px] border-gray rounded-sm ">
							<img src={Payco} className="h-5" alt="Kakao Logo" />
						</button>
						<button className="mt-3 flex items-center justify-center mr-3 border-solid border-[1px] h-[48px] border-gray rounded-sm ">
							<img src={Smile} className="h-6" alt="Kakao Logo" />
						</button>
						<button className="mt-3 flex items-center justify-center mr-3 border-solid border-[1px] h-[48px] border-gray rounded-sm ">
							<img src={Lpay} className="h-5" alt="Kakao Logo" />
						</button>
					</div>
					<div className="flex flex-col w-1/2">
						<button className="mt-3 flex items-center justify-center ml-3 border-solid border-[1px] h-[48px] border-gray rounded-sm ">
							<img src={Toss} className="h-5" alt="Kakao Logo" />
						</button>
						<button className="mt-3 flex items-center justify-center ml-3 border-solid border-[1px] h-[48px] border-gray rounded-sm ">
							<img src={KB} className="h-6" alt="Kakao Logo" />
						</button>
						<button className="mt-3 flex items-center justify-center ml-3 border-solid border-[1px] h-[48px] border-gray rounded-sm ">
							<div className="text-sm"> 휴대폰 </div>
						</button>
						<button className="mt-3 flex items-center justify-center ml-3 border-solid border-[1px] h-[48px] border-gray rounded-sm ">
							<img src={Ssg} className="h-5" alt="Kakao Logo" />
						</button>
						<button className="mt-3 flex items-center justify-center ml-3 border-solid border-[1px] h-[48px] border-gray rounded-sm ">
							<div className="text-sm"> 실시간계좌이체 </div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default PaymentMethod;
