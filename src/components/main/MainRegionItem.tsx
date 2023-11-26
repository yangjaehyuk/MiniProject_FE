import React, { useState, useEffect } from 'react';
import { useQueryMainRegion } from 'hooks/main/useQueryMainRegion';
import { Accommodation } from './MainRegionList';

interface MainRegionItemProps {
	accommodations: Accommodation[];
}

const MainRegionItem: React.FC<MainRegionItemProps> = ({ accommodations }) => {
	return (
		<div>
			{accommodations.map((item) => (
				<div key={item.id}>
					<div>{item.name}</div>
					<div>{item.price}</div>
					<div>{item.star}</div>
				</div>
			))}
		</div>
	);
};

export default MainRegionItem;
