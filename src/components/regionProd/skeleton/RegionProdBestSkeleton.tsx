import React from 'react';
import CategoryTopSkeletonItem from 'components/category/skeleton/CategoryTopSkeletonItem';

function RegionProdBestSkeleton() {
	return (
		<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
			{new Array(6).fill(0).map((_, index) => (
				<CategoryTopSkeletonItem key={index} />
			))}
		</div>
	);
}

export default RegionProdBestSkeleton;
