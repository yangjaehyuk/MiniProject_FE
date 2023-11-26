import React, { useState, useEffect } from 'react';
import { useQueryMainRegion } from 'hooks/main/useQueryMainRegion';
import MainRegionItem from './MainRegionItem';

export type Accommodation = {
	id: string;
	image: string;
	name: string;
	price: string;
	star: string;
};

const MainRegionList = () => {
	const [selectedLocation, setSelectedLocation] = useState<string>('SEOUL');
	const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
	const { data, isLoading } = useQueryMainRegion(selectedLocation);

	const handleLocationClick = (location: string) => {
		setSelectedLocation(location);
	};

	useEffect(() => {
		console.log(data); // 데이터 확인을 위한 콘솔 출력
		if (data?.data?.accommodations) {
			setAccommodations(data.data.accommodations);
		}
	}, [data]);

	console.log('accommodations', accommodations);

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					{' '}
					{!data && <div>No data available</div>}
					<button onClick={() => handleLocationClick('SEOUL')}>Seoul</button>
					<button onClick={() => handleLocationClick('BUSAN')}>Busan</button>
					<button onClick={() => handleLocationClick('INCHEON')}>
						INCHEON
					</button>
					<button onClick={() => handleLocationClick('GYEONGSANG')}>
						GYEONGSANG
					</button>
					<button onClick={() => handleLocationClick('CHUNGCHEONG')}>
						CHUNGCHEONG
					</button>
					<MainRegionItem accommodations={accommodations} />{' '}
				</>
			)}
		</>
	);
};

export default MainRegionList;
