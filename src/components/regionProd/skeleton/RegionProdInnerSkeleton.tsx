import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { regionToKor } from 'utils/switchNameToKor';
import { REGION_CATEGORIES } from 'types/RegionProd.type';
import RegionProdCategories from '../RegionProdCategories';
import RegionProdNavBtn from '../RegionProdNavBtn';
import RegionProdBestSkeleton from './RegionProdBestSkeleton';

function RegionProdInnerSkeleton() {
	const { region } = useParams();
	const [clickedItem, setClickedItem] = useState('호텔');

	const handleNavClick = useCallback((index: number) => {
		setClickedItem(REGION_CATEGORIES[index]);
	}, []);

	return (
		<div className="pt-12">
			<RegionProdCategories region={region ?? ''} />
			<div className="mb-4">
				<h3 className="font-semibold">
					오늘의 {regionToKor(region ?? '')} BEST 여행 모음
				</h3>
			</div>
			<div className="flex gap-2 mb-4">
				{REGION_CATEGORIES.map((category, index) => (
					<RegionProdNavBtn
						key={category}
						index={index}
						region={region ?? ''}
						category={category}
						isActive={category === clickedItem}
						handleClick={handleNavClick}
					/>
				))}
			</div>
			<RegionProdBestSkeleton />
		</div>
	);
}

export default RegionProdInnerSkeleton;
