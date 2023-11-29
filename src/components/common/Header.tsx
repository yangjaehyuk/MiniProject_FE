import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { handleArrowBackClick } from 'utils';
import { Link, useNavigate } from 'react-router-dom';
import { orderItemState } from 'recoil/atoms/orderAtom';
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2';

interface propsType {
	title: string;
}

const Header = ({ title }: propsType) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [orderItem, setOrderItem] = useRecoilState(orderItemState);

	const orders = location.pathname === '/orders';

	const handleHomeClick = () => {
		Swal.fire({
			title: '페이지를 나가시겠습니까 ?',
			text: '나가시면 예약 내역이 초기화 됩니다.',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: '확인',
			cancelButtonText: '취소', // 취소 버튼 텍스트 추가
		}).then((result: any) => {
			if (result.isConfirmed) {
				setOrderItem(null);
				navigate('/');
			}
		});
	};

	const handleBackClick = () => {
		Swal.fire({
			title: '페이지를 나가시겠습니까 ?',
			text: '나가시면 예약 내역이 초기화 됩니다.',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: '확인',
			cancelButtonText: '취소', // 취소 버튼 텍스트 추가
		}).then((result: any) => {
			if (result.isConfirmed) {
				setOrderItem(null);
				window.history.back();
			}
		});
	};

	return (
		<>
			{orders ? (
				<div>
					<div className=" bg-white fixed left-0 top-0 w-screen h-[48px] drop-shadow-sm border-b border-bgGray z-20 ">
						<div className=" w-[768px] px-4 m-auto h-[48px] top-0 left-0 flex justify-between items-center  ">
							<div>
								<ArrowBackIosNewOutlinedIcon onClick={handleBackClick} />
							</div>
							<div className=" font-semibold">{title}</div>
							<div>
								<HomeOutlinedIcon onClick={handleHomeClick} />
							</div>
						</div>
					</div>
				</div>
			) : (
				<div>
					<div className=" bg-white fixed left-0 top-0 w-screen h-[48px] drop-shadow-sm border-b border-bgGray z-20 ">
						<div className=" w-[768px] px-4 m-auto h-[48px] top-0 left-0 flex justify-between items-center  ">
							<div>
								<ArrowBackIosNewOutlinedIcon onClick={handleArrowBackClick} />
							</div>
							<div className=" font-semibold">{title}</div>
							<div>
								<Link to="/">
									<HomeOutlinedIcon />
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
