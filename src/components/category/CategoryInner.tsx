import React, { Suspense } from 'react';
import { KeyboardArrowRight, LocationOn } from '@mui/icons-material';
import CategoryItems from './CategoryItems';
import styles from './Category.module.css';
import { CategoryInnerProps } from 'types/Category.type';
import CategoryTopRated from './CategoryTopRated';
import CategorySkeleton from './skeleton/CategorySkeleton';
// import CategoryItemsSkeleton from './skeleton/CategoryItemsSkeleton';
import RetryErrorBoundary from 'components/common/RetryErrorBoundary';
import CriticalErrorBoundary from 'components/common/CriticalErrorBoundary';

function CategoryInner({ handleOpen }: CategoryInnerProps) {
	return (
		<div className="pt-[48px]">
			<h2 className={styles.title}>어디로 갈까요?</h2>
			<div className={styles.regionSelcBtnBox} onClick={handleOpen}>
				<div className="flex items-center">
					<LocationOn />
					<span>지역 선택</span>
				</div>
				<KeyboardArrowRight sx={{ fontSize: '1.5rem' }} />
			</div>
			<CriticalErrorBoundary>
				<RetryErrorBoundary>
					<Suspense fallback={<CategorySkeleton />}>
						<CategoryTopRated title="고객 평가 TOP 숙소" />
						<CategoryItems title="서울 추천 상품" region="SEOUL" />
						{/* TODO: 데이터 추가후 밑에 코드로 변경 필요 */}
						{/* <CategoryItemsSkeleton title="강원 추천 상품" />
						<CategoryItemsSkeleton title="부산 추천 상품" />
						<CategoryItemsSkeleton title="충청 추천 상품" /> */}
						<CategoryItems title="강원 추천 상품" region="GANGWON" />
						<CategoryItems title="부산 추천 상품" region="BUSAN" />
						<CategoryItems title="충청 추천 상품" region="CHUNGCHEONG" />
					</Suspense>
				</RetryErrorBoundary>
			</CriticalErrorBoundary>
		</div>
	);
}

export default CategoryInner;
