import React from 'react';
import RegionItem from './RegionItem';
import { RegionInnerProps } from 'types/Region.type';
import RegionItemSkeleton from './skeleton/RegionItemSkeleton';
import { getDateDifference } from 'hooks/common/getDateDifference';
import { useRecoilValue } from 'recoil';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { foramtYYYYMMDD } from 'utils/formatDate';

function RegionItems({
	triggerRef,
	data,
	isFetchingNextPage,
}: RegionInnerProps) {
	const startDate = useRecoilValue(checkInDateState);
	const endDate = useRecoilValue(checkOutDateState);
	const start = foramtYYYYMMDD(startDate);
	const end = foramtYYYYMMDD(endDate);

	const diff = getDateDifference(start, end);
	return (
		<>
			<div className="py-4">
				<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page?.data.accommodations.map((item) => (
								<RegionItem key={item.id} {...item} diff={diff} />
							))}
						</React.Fragment>
					))}
					{isFetchingNextPage &&
						new Array(4)
							.fill(0)
							.map((_, index) => <RegionItemSkeleton key={index} />)}
				</div>
			</div>
			<div ref={triggerRef}>&nbsp;</div>
		</>
	);
}

export default RegionItems;
