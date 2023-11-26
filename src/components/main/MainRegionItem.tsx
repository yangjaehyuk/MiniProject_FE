import React, { useState, useEffect } from 'react';
import { useQueryMainRegion } from 'hooks/main/useQueryMainRegion';

type Accommodation = {
	id: string;
	name: string;
	price: string;
	star: string;
};

const MainRegionItem = () => {
	const [selectedLocation, setSelectedLocation] = useState<string>('SEOUL');

	const { data, isLoading } = useQueryMainRegion(selectedLocation);

	const handleLocationClick = (location: string) => {
		setSelectedLocation(location);
	};

	useEffect(() => {
		console.log(data); // 데이터 확인을 위한 콘솔 출력
	}, [data]);
	// fetchSeoul();

	return (
		<div>
			{isLoading && <div>Loading...</div>}
			{!data && <div>No data available</div>}

			<button onClick={() => handleLocationClick('SEOUL')}>Seoul</button>
			<button onClick={() => handleLocationClick('Busan')}>Busan</button>
			<button onClick={() => handleLocationClick('jeju')}>Busan</button>
			<button onClick={() => handleLocationClick('Chungcheong')}>Busan</button>
			<button onClick={() => handleLocationClick('Gyeongsang')}>Busan</button>
			{data?.data?.accommodations.map((item: Accommodation) => (
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
