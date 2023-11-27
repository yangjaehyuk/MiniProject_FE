import React from 'react';
import RegionItem from './RegionItem';
import { RegionInnerProps } from 'types/Region.type';

function RegionItems({ triggerRef, data }: RegionInnerProps) {
	return (
		<>
			<div className="py-4">
				<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page?.data.accommodations.map((item) => (
								<RegionItem key={item.id} {...item} />
							))}
						</React.Fragment>
					))}
				</div>
			</div>
			<div ref={triggerRef}>&nbsp;</div>
		</>
	);
}

export default RegionItems;
