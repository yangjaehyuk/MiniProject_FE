import React from 'react';
import { KeyboardArrowRight, LocationOn } from '@mui/icons-material';
import CategoryItems from './CategoryItems';
import styles from './Category.module.css';

function CategoryInner() {
	return (
		<div className={styles.inner}>
			<h2 className={styles.title}>어디로 갈까요?</h2>
			<div className={styles.regionSelcBtnBox}>
				<div className="flex items-center">
					<LocationOn />
					<span className="text-title">지역 선택</span>
				</div>
				<KeyboardArrowRight sx={{ fontSize: '1.5rem' }} />
			</div>
			<CategoryItems />
		</div>
	);
}

export default CategoryInner;
