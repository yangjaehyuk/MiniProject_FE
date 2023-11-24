import React, { Suspense } from 'react';
import { KeyboardArrowRight, LocationOn } from '@mui/icons-material';
import CategoryItems from './CategoryItems';
import styles from './Category.module.css';
import { CategoryInnerProps } from 'types/Category.type';
import CategoryTopRated from './CategoryTopRated';

function CategoryInner({ handleOpen }: CategoryInnerProps) {
	return (
		<div className="pt-[48px]">
			<h2 className={styles.title}>어디로 갈까요?</h2>
			<div className={styles.regionSelcBtnBox} onClick={handleOpen}>
				<div className="flex items-center">
					<LocationOn />
					<span className="text-title">지역 선택</span>
				</div>
				<KeyboardArrowRight sx={{ fontSize: '1.5rem' }} />
			</div>
			<Suspense fallback={<>Loading...</>}>
				<CategoryTopRated title="고객 평가 TOP 숙소" />
				<CategoryItems title="서울 추천 상품" />
				<CategoryItems title="제주 추천 상품" />
				<CategoryItems title="부산 추천 상품" />
				<CategoryItems title="충청 추천 상품" />
			</Suspense>
		</div>
	);
}

export default CategoryInner;
