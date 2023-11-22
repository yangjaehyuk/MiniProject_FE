import React from 'react';
import { Link } from 'react-router-dom';
import CategorySwiper from './CategorySwiper';
import { ProductItemsProps } from 'types/Region.type';

function CategoryItems({ title, items }: ProductItemsProps) {
	return (
		<div className="p-5">
			<div className="flex justify-between items-center mb-5">
				<h3 className="text-title font-semibold">{title}</h3>
				<Link to={'/hotel/seoul'} className="text-blue-600 font-semibold">
					전체보기
				</Link>
			</div>
			<CategorySwiper items={items} />
		</div>
	);
}

export default CategoryItems;
