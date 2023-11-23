import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import carImage from '../../assets/images/cart-img.png';
import styles from '../../components/cart/Cart.module.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
	const navigate = useNavigate();

	// 예약하기 버튼
	const handleReservation = () => {
		navigate('/orders');
	};

	const [show, setShow] = useState(false);
	const handleScroll = () => {
		if (window.scrollY > 200) {
			setShow(true);
		} else {
			setShow(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [show]);

	return (
		<>
			<Header title="장바구니" />

			<div className="bg-white fixed left-0 top-[48px] w-screen drop-shadow-sm">
				<div className="flex h-[48px]  justify-between items-center px-4  w-[768px]  m-auto top-0   left-0">
					<div className="flex ">
						<input type="checkbox" />
						<div className="ml-2 text-sm">전체선택</div>
					</div>
					<div className="text-sm text-blue">전체 삭제</div>
				</div>
			</div>
			<div className={styles.wrap}>
				<div className="w-[screen] bg-pink-200">
					{/* 예약 숙소 정보 */}
					<div className="w-[screen] bg-pink-200">
						<div className="py-[12px]  bg-white ">
							<div className="mt-4">
								<div className="text-content font-semibold">
									가평 도도키즈 풀필라
								</div>
								<div className="text-sm text-textGray ">
									<span className="pr-1">숙소</span>
									<span className="pr-1">|</span>
									<span>경기도 가평군 상면 임초밤안골로 250-2, 1~3동</span>
								</div>
							</div>
							<div>
								<div className="flex justify-between items-center">
									<div className="text-content font-semibold ">
										방 이름 키즈패밀리 7 (수영장미보유/투룸)
									</div>
									<div className="text-gray w-12 h-12">
										<CloseOutlinedIcon fontSize="small" />
									</div>
								</div>
								<div className="flex">
									<input type="checkbox" />
									<img
										className="h-[80px] w-[80px] mx-3 rounded-md"
										src="https://yaimg.yanolja.com/v5/2023/11/04/09/654608a0ea9055.08741262.jpg"
									></img>
									<div className="flex-col flex text-sm text-textGray ">
										<span className="  text-[#1A1A1A] ">
											2023.12.26 (화) ~ 2023.12.29 (금) | 3박
										</span>
										<span>체크인 15:00 | 체크아웃 11:00</span>
										<span>기준 2명 / 최대 10명</span>
										<span> 선착순 2만원 마감 임박</span>
									</div>
								</div>
							</div>
							<div className="flex justify-end">
								<span className="text-sm">연박 </span>
								<span className="text-sm font-semibold"> 870,0000원</span>
							</div>
						</div>
					</div>
				</div>
			</div>
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

						<div className="my-5 p-2  bg-bgGray  rounded-md">
							<span className="text-sm ">NOL 카드 결제 시,</span>
							<span className="text-sm text-primary font-semibold">
								10% 적립
							</span>
						</div>
						<img src={carImage} className="rounded-md mb-2"></img>

						<ul className="flex flex-col text-xxsm leading-5 text-textGray">
							<li>
								. 장바구니에 담긴 상품은 최대 30일간 보관되며 최대 20개의 상품을
								담을 수 있습니다.
							</li>

							<li>
								일부 상품의 경우, 장바구니에서 수량 및 상세 옵션 수정이
								불가하므로 삭제 후 다시 담아주시기 바랍니다.
							</li>
							<li>쿠폰 및 포인트는 예약화면에서 적용할 수 있습니다.</li>
							<li>
								기차는 국내숙소와 묶음예약만 가능합니다. 숙소를 제외한 다른
								상품은 기차와 함께 예약할 수 없습니다.
							</li>
							<li>
								기차와 국내숙소를 묶음예약하면, 일부 상품만 취소할 수 없고 전체
								취소만 가능합니다.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="bg-white h-[110px] shadow-inner w-screen fixed bottom-0  left-0">
				<div className="w-[768px] m-auto top-0 left-0">
					<div className="flex justify-between items-center py-2">
						<div className="font-semibold  text-sm"> 총 1건</div>
						<div className="flex items-center">
							<div className="text-textGray text-xxsm mr-4">결제 예상 금액</div>
							<div className="text-[16px] font-semibold ">870,000 원</div>
						</div>
					</div>
					<div></div>
					<button
						onClick={handleReservation}
						className="flex font-semibold text-content justify-center items-center w-full py-5 text-center bg-secondary rounded-md h-[20px]  text-white"
					>
						예약하기
					</button>
					{show && (
						<div className="text-textGray text-xxsm mt-2">
							(주)야놀자는 통신판매중개업자로서, 통신판매의 당사자가 아니라는
							사실을 고지하며 상품의 예약, 이용 및 환불 등과 관련한 의무와
							책임은 각 판매자에게 있습니다.
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
