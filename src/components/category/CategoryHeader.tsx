import React from 'react';
import { KeyboardArrowLeft, ShoppingCartOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { categoryToKor, regionToKor } from 'utils/switchNameToKor';
import { Link } from 'react-router-dom';
import { handleArrowBackClick } from 'utils';
import styles from './Category.module.css';

function CategoryHeader() {
	const { category, region } = useParams();
	return (
		<nav className={styles.nav}>
			<div className={styles.wrap}>
				<div className={styles.leftWrap} onClick={handleArrowBackClick}>
					<KeyboardArrowLeft sx={{ fontSize: '2rem' }} />
				</div>
				<h2 className="text-title font-semibold">
					{categoryToKor(category ?? '')}
					{regionToKor(region ?? '')}
				</h2>
				<div className={styles.rightWrap}>
					<Link to={`/cart`}>
						<ShoppingCartOutlined />
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default CategoryHeader;
