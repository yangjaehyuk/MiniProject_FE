import React from 'react';
// import { ProductSwiperProps } from 'types/Category.type';
import RegionItem from './RegionItem';
import useQueryRegion from 'hooks/region/useQueryRegion';
import { useParams } from 'react-router-dom';

function RegionItems() {
	const { category, region } = useParams();
	const data = useQueryRegion(`${category}/${region}`);

	return (
		<div className="py-4">
			<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
				{data?.map((item) => <RegionItem key={item.id} {...item} />)}
			</div>
		</div>
	);
}

export default RegionItems;
