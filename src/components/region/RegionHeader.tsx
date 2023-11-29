import React from 'react';
import {
	HomeOutlined,
	KeyboardArrowLeft,
	ShoppingCartOutlined,
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { categoryToKor, regionToKor } from 'utils/switchNameToKor';
import styles from './Region.module.css';
import { handleArrowBackClick } from 'utils';
import { Link } from 'react-router-dom';
import { RegionHeaderProps } from 'types/Region.type';

function RegionHeader({
	type,
	name,
	isHomeIcon = false,
	isBackIcon = true,
	isCartIcon = false,
}: RegionHeaderProps) {
	const { category, region } = useParams();

	return (
		<nav className={styles.nav}>
			<div className={styles.wrap}>
				<div className={styles.leftWrap} onClick={handleArrowBackClick}>
					{isBackIcon && (
						<div className="w-8">
							<KeyboardArrowLeft sx={{ fontSize: '2rem' }} />
						</div>
					)}
				</div>
				<h2 className="text-title font-semibold">
					{name}
					{type === 'category' && categoryToKor(category ?? '')}
					{type === 'region' && regionToKor(region ?? '')}
				</h2>
				<div className={styles.rightWrap}>
					<div className="flex justify-end">
						{isHomeIcon && (
							<div className="w-8">
								<Link to="/">
									<HomeOutlined />
								</Link>
							</div>
						)}
						{isCartIcon && (
							<div className="w-8">
								<Link to="/cart">
									<ShoppingCartOutlined />
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default RegionHeader;
