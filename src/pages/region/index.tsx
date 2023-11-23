import React from 'react';
import RegionHeader from 'components/region/RegionHeader';
import RegionListNav from 'components/region/RegionListNav';
import RegionItems from 'components/region/RegionItems';
import { REGION_SEOUL_DATA } from 'types/Region.type';

function Region() {
	return (
		<main className="">
			<RegionHeader />
			<div className="pt-[48px]">
				<RegionListNav />
				<RegionItems items={REGION_SEOUL_DATA} />
			</div>
		</main>
	);
}

export default Region;
