import React from 'react';
import Header from 'components/common/Header';
import styles from '../../components/cart/Cart.module.css';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ResultFooter from 'components/Footer/ResultFooter';
const result = () => {
	return (
		<div>
			<Header title="주문 결과" />
			<div className="bg-white fixed left-0 top-[48px] w-screen drop-shadow-sm">
				<div className="flex h-[48px] justify-center items-center px-4  w-[768px]  m-auto top-0   left-0">
					<div className="flex flex-col justify-center items-center ">
						<div className=" font-semibold text-content">
							예약이 완료되었습니다.
						</div>
						<div className=" text-sm">예약 일시: 2023.11.21 (화) 11:34</div>
					</div>
				</div>
			</div>
			<div className={styles.subWrap}>
				<div>
					<div className="flex justify-between items-center">
						<div className="text-content font-semibold">상품 정보 1건</div>
						<ExpandMoreOutlinedIcon />
					</div>
					<div className="text-xxsm text-textGray py-2">숙소 예약 번호 </div>
					<div>
						<div className="text-content font-semibold">
							더 리버 사이드 호텔
						</div>
						<div className="flex">
							<div>
								<img></img>
							</div>
							<div className="flex flex-col">
								<div className="text-md">객실 정보 슈페리어</div>
								<div className="text-xs ">
									2023.10.20(수) ~ 2024.12.21 (목) | 1박{' '}
								</div>
								<div className="text-xxsm text-textGray">
									체크인 15:00 | 체크아웃 11:00
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.subWrap}>
				<div className="flex justify-between items-center py-3">
					<div className="text-content font-semibold "> 예약자 정보</div>
					<ExpandMoreOutlinedIcon />
				</div>

				<div className="flex justify-between items-center py-1">
					<div className="text-md">이름</div>
					<div className="text-md"> 야놀자 이름</div>
				</div>
				<div className="flex justify-between items-center py-2">
					<div className="text-md">휴대폰 번호</div>
					<div className="text-md"> 010-7777-7777</div>
				</div>
			</div>
			<div className={styles.subWrap}>
				<div className="flex justify-between items-center py-3">
					<div className="text-content font-semibold "> 이용자 정보</div>
					<ExpandMoreOutlinedIcon />
				</div>

				<div className="flex justify-between items-center py-1">
					<div className="text-md">이름</div>
					<div className="text-md"> 야놀자 이름</div>
				</div>
				<div className="flex justify-between items-center py-2">
					<div className="text-md">휴대폰 번호</div>
					<div className="text-md"> 010-7777-7777</div>
				</div>
			</div>
			<div className={styles.subWrap}>
				<div className="text-content font-semibold py-3 "> 예약 정보</div>

				<div className="flex justify-between items-center py-1">
					<div className="text-md">통합 주문번호</div>
					<div className="text-md">Y23145456DDUY</div>
				</div>
				<div className="flex justify-between items-center py-2">
					<div className="text-md">예약 상품</div>
					<div className="text-md"> 더 리버사이드 호텔</div>
				</div>
				<div className="flex justify-between items-center py-2">
					<div className="text-md">결제 수단</div>
					<div className="text-md">카카오페이</div>
				</div>
			</div>
			<div className={styles.subWrap}>
				<div className="text-content font-semibold py-3 "> 결제 금액</div>

				<div className="flex justify-between items-center py-1">
					<div className="text-md">상품 금액</div>
					<div className="text-md">980,000 원</div>
				</div>
			</div>
			<div className={styles.subWrap}>
				<div className="flex justify-between items-center py-1">
					<div className="text-md">총 결제 금액</div>
					<div className="text-title font-semibold py-3 ">980,000 원</div>
				</div>
			</div>

			<div className="w-[768px] m-auto top-0 left-0 py-5">
				<button className="flex font-semibold text-content justify-center items-center w-full py-5 px-3 text-center bg-secondary rounded-md h-[20px]  text-white">
					홈으로
				</button>
			</div>
			<ResultFooter />
		</div>
	);
};

export default result;
