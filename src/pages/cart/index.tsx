import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';
import CartList from 'components/cart/CartList';
import CartBottom from 'components/cart/CartBottom';
import { useQueryMainRegion } from 'hooks/cart/useQueryCart';
import { Accommodation, RoomType, CartItem } from 'types/Cart.type';

const Cart = () => {
	const { data, isLoading } = useQueryMainRegion();
	const navigate = useNavigate();
	// 데이터 숙소 아이템
	const [dataCartItems, setDataCartItems] = useState<CartItem[]>([]);
	// 선택한 숙소 아이템
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	useEffect(() => {
		if (!isLoading) {
			setDataCartItems(data?.data?.cartItems || []);
		}
	}, [isLoading, data]);

	const handleCheckbox = (ClickCartItem: CartItem) => {
		console.log(ClickCartItem);
		const index = cartItems.findIndex((item) => item.id === ClickCartItem.id);

		if (index !== -1) {
			// 이미 선택한 숙소라면 해당 숙소를 cartItems에서 제거
			const updatedCartItems = [...cartItems];
			updatedCartItems.splice(index, 1);
			setCartItems(updatedCartItems);
		} else {
			// 선택하지 않은 숙소라면 cartItems에 추가
			setCartItems([...cartItems, ClickCartItem]);
		}
	};

	console.log('cartItems 선택된 ', cartItems);
	// console.log('cartItems22', dataCartItems);

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
			{/* {data?.data?.cartItems ? (
				// 데이터가 있을 때 보여줄 화면
				
			) : (
				// 데이터가 없을 때 보여줄 화면
				<div>다른 화면을 보여줄 내용</div>
			)} */}
			<CartList dataCartItems={dataCartItems} handleCheckbox={handleCheckbox} />
			<CartBottom />
			<div className="bg-white ${show ? 'h-[150px]' : 'h-[110px]'} shadow-inner w-screen fixed bottom-0  left-0">
				<div className="w-[768px] m-auto top-0 left-0 pb-3">
					<div className="flex justify-between items-center py-2">
						<div className="font-semibold  text-sm"> 총 1건</div>
						<div className="flex items-center">
							<div className="text-textGray text-xxsm mr-4">결제 예상 금액</div>
							<div className="text-[16px] font-semibold ">870,000 원</div>
						</div>
					</div>

					<button
						onClick={handleReservation}
						className="flex font-semibold text-content justify-center items-center w-full py-5 text-center bg-secondary rounded-md h-[20px]  text-white"
					>
						예약하기
					</button>
					{show && (
						<div className="text-textGray text-xxsm mt-2 ">
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
