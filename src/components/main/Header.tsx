import React, { useEffect } from 'react';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { MainHeaderProps } from 'types/MainPage.type';
import { getCartCount } from 'hooks/common/useQueryCartCount';
import { Badge } from '@material-tailwind/react';
import { getCookie } from 'utils';
import { useRecoilState } from 'recoil';
import { cartCountState } from 'recoil/atoms/cartAtom';

const Header = ({ handleOpen }: MainHeaderProps) => {
	const navigate = useNavigate();
	const [cartCount, setCartCount] = useRecoilState(cartCountState);

	useEffect(() => {
		const accessToken = getCookie('accessToken');
		if (accessToken) {
			(async () => {
				const count = await getCartCount();
				setCartCount(count);
			})();
		} else {
			setCartCount(0);
		}
	}, []);

	const handleInputBtn = () => {
		navigate('/search');
	};
	return (
		<div className=" bg-white fixed left-0 top-0 w-screen drop-shadow-sm  z-10">
			<div className=" h-[56px] w-[768px] px-4 m-auto top-0 left-0 flex justify-between items-center ">
				<div className="cursor-pointer" onClick={handleOpen}>
					<DehazeOutlinedIcon fontSize="small" />
				</div>
				<div onClick={handleInputBtn}>
					<div className="border-solid border-[1px] px-4 border-gray rounded-full w-[650px] flex justify-between items-center cursor-pointer">
						<span className=" text-textGray text-sm py-1.5">
							무엇을 하고 놀까요 ?
						</span>
						<SearchOutlinedIcon fontSize="small" />
					</div>
				</div>
				<Link to="/cart">
					{cartCount && cartCount > 0 ? (
						<Badge
							content={cartCount}
							className="bg-primary p-0 w-4 min-w-0 h-4 min-h-0"
						>
							<ShoppingCartOutlinedIcon fontSize="small" />
						</Badge>
					) : (
						<ShoppingCartOutlinedIcon fontSize="small" />
					)}
				</Link>
			</div>
		</div>
	);
};

export default Header;
