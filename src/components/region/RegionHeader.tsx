import React from 'react';
import {
	HomeOutlined,
	KeyboardArrowLeft,
	ShoppingCartOutlined,
} from '@mui/icons-material';
import styles from './Region.module.css';

function RegionHeader() {
	return (
		<nav className={styles.nav}>
			<div className={styles.wrap}>
				<div className={styles.leftWrap}>
					<div className="w-8">
						<KeyboardArrowLeft sx={{ fontSize: '2rem' }} />
					</div>
				</div>
				<h2 className="text-title">호텔/리조트</h2>
				<div className={styles.rightWrap}>
					<div className="flex">
						<div className="w-8">
							<ShoppingCartOutlined />
						</div>
						<div className="w-8">
							<HomeOutlined />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default RegionHeader;
