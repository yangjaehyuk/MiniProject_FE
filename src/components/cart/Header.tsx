import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const Header = () => {
	return (
		<div>
			<div className=" h-[48px] w-[768px] m-auto top-0 left-0 ">
				<div className="flex justify-between items-center h-[48px]">
					<div>
						<ArrowBackIosNewOutlinedIcon />
					</div>
					<div>장바구니</div>
					<div>
						<HomeOutlinedIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
