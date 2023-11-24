import React from 'react';
// import { ProductSwiperProps } from 'types/Category.type';
import RegionItem from './RegionItem';
import useQueryRegion from 'hooks/region/useQueryRegion';

function RegionItems() {
	const data = useQueryRegion();

	return (
		<div className="py-4">
			<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.data.results.map((item) => (
							<RegionItem key={item.id} {...item} />
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default RegionItems;
