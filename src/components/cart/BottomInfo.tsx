import React from 'react';
import carImage from '../../assets/images/cart-img.png';

const BottomInfo = () => {
	return (
		<>
			{' '}
			<div className="my-5 p-2  bg-bgGray  rounded-md">
				<span className="text-sm ">NOL 카드 결제 시,</span>
				<span className="text-sm text-primary font-semibold">10% 적립</span>
			</div>
			<a
				rel="noreferrer"
				target="_blank"
				href="https://board.yanolja.com/event/398/index.html"
				className="text-left"
			>
				<img src={carImage} className="rounded-md mb-2"></img>
			</a>
			<ul className="flex flex-col text-xxsm leading-5 text-textGray">
				<li>
					장바구니에 담긴 상품은 최대 30일간 보관되며 최대 20개의 상품을 담을 수
					있습니다.
				</li>

				<li>
					일부 상품의 경우, 장바구니에서 수량 및 상세 옵션 수정이 불가하므로
					삭제 후 다시 담아주시기 바랍니다.
				</li>
				<li>쿠폰 및 포인트는 예약화면에서 적용할 수 있습니다.</li>
				<li>
					기차는 국내숙소와 묶음예약만 가능합니다. 숙소를 제외한 다른 상품은
					기차와 함께 예약할 수 없습니다.
				</li>
				<li>
					기차와 국내숙소를 묶음예약하면, 일부 상품만 취소할 수 없고 전체 취소만
					가능합니다.
				</li>
			</ul>
		</>
	);
};

export default BottomInfo;
