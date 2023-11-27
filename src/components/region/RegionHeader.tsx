import React from 'react';
import {
	HomeOutlined,
	KeyboardArrowLeft,
	ShoppingCartOutlined,
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { categoryToKor } from 'utils/switchNameToKor';
import styles from './Region.module.css';
import { handleArrowBackClick } from 'utils';
import { Link } from 'react-router-dom';

function RegionHeader() {
	const { category } = useParams();
	return (
		<nav className={styles.nav}>
			<div className={styles.wrap}>
				<div className={styles.leftWrap} onClick={handleArrowBackClick}>
					<div className="w-8">
						<KeyboardArrowLeft sx={{ fontSize: '2rem' }} />
					</div>
				</div>
				<h2 className="text-title">{categoryToKor(category ?? '')}</h2>
				<div className={styles.rightWrap}>
					<div className="flex">
						<div className="w-8">
							<Link to="/cart">
								<ShoppingCartOutlined />
							</Link>
						</div>
						<div className="w-8">
							<Link to="/">
								<HomeOutlined />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default RegionHeader;
