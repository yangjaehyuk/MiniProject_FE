import React from 'react';
import { KeyboardArrowLeft, ShoppingCartOutlined } from '@mui/icons-material';
import styles from './Category.module.css';

function CategoryHeader() {
	return (
		<nav className={styles.nav}>
			<div className={styles.wrap}>
				<div className={styles.leftWrap}>
					<KeyboardArrowLeft sx={{ fontSize: '2rem' }} />
				</div>
				<div className="text-title">호텔/리조트</div>
				<div className={styles.rightWrap}>
					<ShoppingCartOutlined />
				</div>
			</div>
		</nav>
	);
}

export default CategoryHeader;
