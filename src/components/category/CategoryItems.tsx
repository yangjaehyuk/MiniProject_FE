import React from 'react';
import { Link } from 'react-router-dom';
import CategorySwiper from './CategorySwiper';
import { ProductItemsProps } from 'types/Region.type';
import useQueryCategory from 'hooks/category/useQueryCategory';

function CategoryItems({ title, region }: ProductItemsProps) {
	const { data, category } = useQueryCategory(region);

	return (
		<div className="py-5">
			<div className="flex justify-between items-center mb-5">
				<h3 className="text-title font-semibold">{title}</h3>
				<Link to={`/${category}/seoul`} className="text-blue font-semibold">
					전체보기
				</Link>
			</div>
			{data && <CategorySwiper items={data.data.accommodations} />}
		</div>
	);
}

export default CategoryItems;
