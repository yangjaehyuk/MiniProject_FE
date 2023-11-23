import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

interface propsType {
	title: string;
}

const Header = ({ title }: propsType) => {
	return (
		<div>
			<div className=" bg-white fixed left-0 top-0 w-screen h-[48px] drop-shadow-sm border-b border-bgGray ">
				<div className=" w-[768px] px-4 m-auto h-[48px] top-0 left-0 flex justify-between items-center  ">
					<div>
						<ArrowBackIosNewOutlinedIcon />
					</div>
					<div>{title}</div>
					<div>
						<HomeOutlinedIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
