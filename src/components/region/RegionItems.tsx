import React from 'react';
import RegionItem from './RegionItem';
import useQueryRegion from 'hooks/region/useQueryRegion';
import { useInView } from 'react-intersection-observer';

function RegionItems() {
	const { ref, inView } = useInView();
	const data = useQueryRegion(inView);

	return (
		<>
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
			<div ref={ref}>&nbsp;</div>
		</>
	);
}

export default RegionItems;
