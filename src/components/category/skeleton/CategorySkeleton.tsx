import React from 'react';
import CategoryTopSkeleton from './CategoryTopSkeleton';
import CategoryItemsSkeleton from './CategoryItemsSkeleton';

function CategorySkeleton() {
	return (
		<>
			<CategoryTopSkeleton title="고객 평가 TOP 숙소" />
			<CategoryItemsSkeleton title="서울 추천 상품" />
			<CategoryItemsSkeleton title="제주 추천 상품" />
			<CategoryItemsSkeleton title="부산 추천 상품" />
			<CategoryItemsSkeleton title="충청 추천 상품" />
		</>
	);
}

export default CategorySkeleton;
