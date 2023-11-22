import React from 'react';
import RegionHeader from 'components/region/RegionHeader';
import RegionListNav from 'components/region/RegionListNav';
import RegionItems from 'components/region/RegionItems';

function Region() {
	return (
		<div>
			<RegionHeader />
			<RegionListNav />
			<RegionItems />
		</div>
	);
}

export default Region;
