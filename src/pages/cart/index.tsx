import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';
import CartList from 'components/cart/CartList';
import CartBottom from 'components/cart/CartBottom';
import { useQueryMainRegion } from 'hooks/cart/useQueryCart';
import { dataCartItem, CartItem } from 'types/Cart.type';
import { deleteCartItem, allDeleteItem } from 'apis/cartAPI';
import useScrollToShow from 'hooks/common/handleScroll';

const Cart = () => {
	const { data, isLoading } = useQueryMainRegion();

	const scroll = useScrollToShow(false, 200);
	const navigate = useNavigate();

	// 데이터 숙소 아이템
	const [dataCartItems, setDataCartItems] = useState<dataCartItem[]>([]);
	// 선택한 숙소 아이템
	const [cartItems, setCartItems] = useState<dataCartItem[]>([]);
	// 전체 선택 상태
	const [selectAll, setSelectAll] = useState(true);

	useEffect(() => {
		if (!isLoading) {
			const temp = data?.data?.cartItems;
			if (temp.length > 0) {
				const newData: dataCartItem[] = temp.map((item: CartItem) => {
					const copy = { ...item, isClicked: true };
					return copy;
				});
				console.log(newData);
				setDataCartItems(newData || []);
				setCartItems(newData);
			}
			console.log(temp);
			// setDataCartItems(data?.data?.cartItems || []);
		}
	}, [isLoading, data]);

	//  전체선택 버튼 클릭
	const handleSelectAll = () => {
		const updatedDataCartItems: dataCartItem[] = dataCartItems.map((item) => ({
			...item,
			isClicked: !selectAll,
		}));
		setDataCartItems(updatedDataCartItems);
		setSelectAll((prev) => !prev);
		if (!selectAll == true) {
			setCartItems(dataCartItems);
		} else {
			setCartItems([]);
		}
	};

	// 개별선택 버튼 클릭
	const handleCheckbox = (clickedCartItem: dataCartItem) => {
		const updatedCartItems = cartItems.map((item) =>
			item.id === clickedCartItem.id
				? { ...item, isClicked: !item.isClicked }
				: item,
		);

		setCartItems(updatedCartItems); // 상태 업데이트

		const exists = cartItems.some((item) => item.id === clickedCartItem.id);

		if (!exists) {
			// cartItems에 ClickCartItem의 id와 동일한 값이 없으면 추가
			setCartItems([...cartItems, clickedCartItem]);
		} else {
			// cartItems에 이미 ClickCartItem의 id와 동일한 값이 있으면 제거
			const updatedCartItems = cartItems.filter(
				(item) => item.id !== clickedCartItem.id,
			);
			setCartItems(updatedCartItems);
		}

		// 모든 자식 체크박스 true시 전체 체크박스 true
		const allChecked = dataCartItems.every((item) => item.isClicked);
		setSelectAll(allChecked);
	};

	// 개별 삭제 버튼
	const handleDeleteItem = async (itemId: string) => {
		const res = await deleteCartItem(itemId);
		if (res.success) {
			const updatedDataItems = dataCartItems.filter(
				(item) => item.id !== itemId,
			);
			setDataCartItems(updatedDataItems);
			// 선택된 item
			const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
			setCartItems(updatedCartItems);
		}
	};

	// 전체 삭제 버튼
	const AllDeleteItem = async () => {
		const res = await allDeleteItem();
		if (res.success) {
			setDataCartItems([]);
			setCartItems([]);
		}
	};
	console.log('cartItems 선택된 ', cartItems);
	console.log('dataCartItems', dataCartItems);
	console.log('시작시 전부 넣음cartItems', cartItems);

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
						<input
							type="checkbox"
							onChange={handleSelectAll}
							checked={selectAll}
						/>
						<div className="ml-2 text-sm">전체선택</div>
					</div>
					<div
						className="text-sm text-blue"
						onClick={() => {
							AllDeleteItem();
						}}
					>
						전체 삭제
					</div>
				</div>
			</div>
			<CartList
				dataCartItems={dataCartItems}
				handleCheckbox={handleCheckbox}
				handleDeleteItem={handleDeleteItem}
			/>
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
