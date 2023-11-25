import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ArrowBackIos } from '@mui/icons-material';
import { handleArrowBackClick } from 'utils';
import { useNavigate } from 'react-router';
const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="fixed top-0 left-0 w-full h-[48px] my-auto bg-white border border-b-1 border-gray">
			<div className="w-[768px] flex h-[48px] m-auto items-center justify-between">
				<ArrowBackIos
					className="flex cursor-pointer m-2"
					onClick={handleArrowBackClick}
				/>
				<div className="flex text-title font-bold cursor-default">
					My 야놀자
				</div>
				<ShoppingCartOutlinedIcon
					className="cursor-pointer"
					onClick={() => navigate('/cart')}
				></ShoppingCartOutlinedIcon>
			</div>
		</div>
	);
};

export default Header;
