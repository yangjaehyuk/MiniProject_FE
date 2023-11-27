import React from 'react';
import RegionItemSkeleton from './RegionItemSkeleton';

function RegionItemsSkeleton() {
	return (
		<div className="py-4">
			<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
				{new Array(4).fill(0).map((_, index) => (
					<RegionItemSkeleton key={index} />
				))}
			</div>
		</div>
	);
}

export default RegionItemsSkeleton;
