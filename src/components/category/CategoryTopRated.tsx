import React from 'react';
import { ProductItemsProps } from 'types/Region.type';
import CategoryTopItem from './CategoryTopItem';

function CategoryTopRated({ title, items }: ProductItemsProps) {
	return (
		<div className="py-5 mt-5">
			<h2 className="text-title font-semibold mb-4">{title}</h2>
			<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
				{items.map((item) => (
					<CategoryTopItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}

export default CategoryTopRated;
