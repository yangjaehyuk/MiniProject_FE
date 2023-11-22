import React from 'react';
import { KeyboardArrowRight, LocationOn } from '@mui/icons-material';
import CategoryItems from './CategoryItems';
import styles from './Category.module.css';
import { CATEGORY_SEOUL_DATA } from 'types/Category.type';

function CategoryInner() {
	return (
		<div className="pt-[48px]">
			<h2 className={styles.title}>어디로 갈까요?</h2>
			<div className={styles.regionSelcBtnBox}>
				<div className="flex items-center">
					<LocationOn />
					<span className="text-title">지역 선택</span>
				</div>
				<KeyboardArrowRight sx={{ fontSize: '1.5rem' }} />
			</div>
			<CategoryItems title="서울 추천 상품" items={CATEGORY_SEOUL_DATA} />
		</div>
	);
}

export default CategoryInner;
