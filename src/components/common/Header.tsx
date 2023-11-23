import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { handleArrowBackClick } from 'utils';
import { Link } from 'react-router-dom';

interface propsType {
	title: string;
}

const Header = ({ title }: propsType) => {
	return (
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
	);
};

export default Header;
