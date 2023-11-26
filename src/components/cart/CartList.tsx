import React from 'react';
import styles from '../../components/cart/Cart.module.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const CartList = () => {
	return (
		<>
			{' '}
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
		</>
	);
};

export default CartList;
