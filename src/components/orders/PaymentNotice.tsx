import React from 'react';

const PaymentNotice = () => {
	return (
		<>
			<div className="bg-bgOrange  px-5 ">
				<ul className="list-disc">
					<div className="py-2">
						<li className="text-orange text-xxsm font-black ">현장결제</li>
						<div className="text-xxsm  ">
							추가인원 비용등의 현장결제 발생 상품을 확인하세요.
						</div>
					</div>
					<div className="py-2">
						<li className="text-orange text-xxsm font-black ">
							취소불가 및 수수료
						</li>
						<div className="text-xxsm  ">
							취소 및 환불규정에 따라 취소불가, 수수료가 발생 할 수 있습니다.
						</div>
					</div>
					<div className="py-2">
						<li className="text-orange text-xxsm font-black ">
							미성년자 및 법정대리인 필수
						</li>
						<div className="text-xxsm  ">
							미성년자는 법정대리인 동행 없이 투숙이 불가능합니다.
						</div>
					</div>
				</ul>
			</div>
		</>
	);
};

export default PaymentNotice;
