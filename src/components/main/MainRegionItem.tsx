import React, { useState } from 'react';
import fetchSeoul from '../../apis/axios';

const MainRegionItem = () => {
	const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

	const handleLocationClick = (location: string) => {
		setSelectedLocation(location);
	};

	// fetchSeoul();

	return (
		<div>
			<button onClick={() => handleLocationClick('Seoul')}>Seoul</button>
			<button onClick={() => handleLocationClick('Busan')}>Busan</button>
			<button onClick={() => handleLocationClick('jeju')}>Busan</button>
			<button onClick={() => handleLocationClick('Chungcheong')}>Busan</button>
			<button onClick={() => handleLocationClick('Gyeongsang')}>Busan</button>
		</div>
	);
};

export default MainRegionItem;
