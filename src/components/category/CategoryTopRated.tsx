import React from 'react';
import { ProductItemsProps } from 'types/Region.type';
import CategoryTopItem from './CategoryTopItem';

function CategoryTopRated({ title, items }: ProductItemsProps) {
	return (
		<div className="py-5 mt-5">
			<div className="mb-4">
				<h2 className="text-title font-semibold">{title}</h2>
				<p className="text-content text-textGray">
					고객분들의 좋은 평점 후기를 받은 상품
				</p>
			</div>
			<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
				{items.map((item) => (
					<CategoryTopItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}

export default CategoryTopRated;
