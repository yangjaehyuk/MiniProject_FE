import React from 'react';
import { ProductItemsProps } from 'types/Region.type';
import CategoryTopItem from './CategoryTopItem';
import { useQueryBestCategory } from 'hooks/category/useQueryCategory';

function CategoryTopRated({ title }: Pick<ProductItemsProps, 'title'>) {
	const { data, isError } = useQueryBestCategory();
	if (isError) {
		return <div>There was an Error</div>;
	}
	return (
		<div className="py-5 mt-5">
			<div className="mb-4">
				<h2 className="text-title font-semibold">{title}</h2>
				<p className="text-content text-textGray">
					고객분들의 좋은 평점 후기를 받은 순으로 추천 드립니다
				</p>
			</div>
			<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
				{data?.data.accommodations.map((item, index) => (
					<CategoryTopItem key={item.id} {...item} index={index} />
				))}
			</div>
		</div>
	);
}

export default CategoryTopRated;
