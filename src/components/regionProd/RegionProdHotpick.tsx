import React from 'react';
import { REGION_HOTPICKS } from 'types/RegionProd.type';

function RegionProdHotpick() {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
			{REGION_HOTPICKS.map((hotpick) => (
				<div key={hotpick.id}>
					<img src={hotpick.src} />
				</div>
			))}
		</div>
	);
}

export default RegionProdHotpick;
