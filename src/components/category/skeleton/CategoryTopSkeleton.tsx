import React from 'react';
import { ProductItemsProps } from 'types/Region.type';
import CategoryTopSkeletonItem from './CategoryTopSkeletonItem';

function CategoryTopSkeleton({ title }: Pick<ProductItemsProps, 'title'>) {
	return (
		<div className="py-5 mt-5">
			<div className="mb-4">
				<h2 className="text-title font-semibold">{title}</h2>
				<p className="text-content text-textGray">
					고객분들의 좋은 평점 후기를 받은 순으로 추천 드립니다
				</p>
			</div>
			<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
				{new Array(6).fill(0).map((_, index) => (
					<CategoryTopSkeletonItem key={index} />
				))}
			</div>
		</div>
	);
}

export default CategoryTopSkeleton;
