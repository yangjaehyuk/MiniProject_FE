import React from 'react';
import { Link } from 'react-router-dom';
import CategorySwiper from './CategorySwiper';
import { CATEGORY_SEOUL_DATA } from 'types/Category.type';

function CategoryItems() {
	return (
		<div className="p-5">
			<div className="flex justify-between items-center mb-5">
				<h3 className="text-title font-semibold">서울 추천 상품</h3>
				<Link to={'/hotel/seoul'} className="text-blue-600 font-semibold">
					전체보기
				</Link>
			</div>
			<CategorySwiper items={CATEGORY_SEOUL_DATA} />
		</div>
	);
}

export default CategoryItems;
