import React, { useState, useEffect } from 'react';
import { useQueryMainRegion } from 'hooks/main/useQueryMainRegion';
import MainRegionItem from './MainRegionItem';

export type Accommodation = {
	id: string;
	image: string;
	name: string;
	price: number;
	star: string;
	index: string;
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
					{!data && <div>No data available</div>}
					<div className="font-semibold text-title"> 겨울엔 이 숙소 </div>
					<div className="my-2 ">
						<button
							className="bg-white border-2 border-bgGray rounded-full py-1 px-2 text-black w-[80px] mr-2"
							onClick={() => handleLocationClick('SEOUL')}
						>
							서울
						</button>
						<button
							className="bg-white border-2 border-bgGray rounded-full py-1 px-2 text-black w-[80px] mr-2"
							onClick={() => handleLocationClick('BUSAN')}
						>
							부산
						</button>
						<button
							className="bg-white border-2 border-bgGray rounded-full py-1 px-2 text-black w-[80px] mr-2"
							onClick={() => handleLocationClick('INCHEON')}
						>
							인천
						</button>
						<button
							className="bg-white border-2 border-bgGray rounded-full py-1 px-2 text-black w-[80px] mr-2"
							onClick={() => handleLocationClick('GYEONGSANG')}
						>
							경상
						</button>
						<button
							className="bg-white border-2 border-bgGray rounded-full py-1 px-2 text-black w-[80px] mr-2"
							onClick={() => handleLocationClick('CHUNGCHEONG')}
						>
							충청
						</button>
					</div>
					<MainRegionItem accommodations={accommodations} />
				</>
			)}
		</>
	);
};

export default MainRegionList;
