import React from 'react';
import { ProductItemsProps } from 'types/Region.type';
import CategorySwiperSkeleton from './CategorySwiperSkeleton';

function CategoryItemsSkeleton({ title }: Pick<ProductItemsProps, 'title'>) {
	return (
		<div className="py-5">
			<div className="flex justify-between items-center mb-5">
				<h3 className="text-title font-semibold">{title}</h3>
				<span className="text-blue font-semibold">전체보기</span>
			</div>
			<CategorySwiperSkeleton />
		</div>
	);
}

export default CategoryItemsSkeleton;
