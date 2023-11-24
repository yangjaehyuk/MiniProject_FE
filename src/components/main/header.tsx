import React from 'react';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { MainHeaderProps } from 'types/MainPage.type';

const Header = ({ handleOpen }: MainHeaderProps) => {
	return (
		<div className=" bg-white fixed left-0 top-0 w-screen drop-shadow-sm ">
			<div className=" h-[56px] w-[768px] px-4 m-auto top-0 left-0 flex justify-between items-center ">
				<div className="cursor-pointer" onClick={handleOpen}>
					<DehazeOutlinedIcon fontSize="small" />
				</div>
				<div>
					<div className="border-solid border-[1px] px-4 border-gray rounded-full w-[650px] flex justify-between items-center">
						<span className=" text-textGray text-sm py-1.5">
							무엇을 하고 놀까요 ?
						</span>
						<SearchOutlinedIcon fontSize="small" />
					</div>
				</div>
				<ShoppingCartOutlinedIcon fontSize="small" />
			</div>
		</div>
	);
};

export default Header;
