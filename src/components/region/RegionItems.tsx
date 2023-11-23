import React from 'react';
import { ProductSwiperProps } from 'types/Category.type';
import RegionItem from './RegionItem';

function RegionItems({ items }: ProductSwiperProps) {
	return (
		<div className="py-4">
			<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
				{items.map((item) => (
					<RegionItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}

export default RegionItems;
