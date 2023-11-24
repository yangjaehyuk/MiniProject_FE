import React, { Suspense, useEffect, useState } from 'react';
import RegionHeader from 'components/region/RegionHeader';
import RegionListNav from 'components/region/RegionListNav';
import RegionItems from 'components/region/RegionItems';
// import { REGION_SEOUL_DATA } from 'types/Region.type';
import CategoryRegionModal from 'components/category/CategorySelcRegion';
import { useParams } from 'react-router-dom';
import RegionProdOptionModal from 'components/region/RegionProdOptionModal';
import RegionProdCapacityModal from 'components/region/RegionProdCapacityModal';
import CalendarModal from 'components/common/CalendarModal';

function Region() {
	const { region } = useParams();
	const [regionOpen, setRegionOpen] = useState(false);
	const [optionOpen, setOptionOpen] = useState(false);
	const [dateOpen, setDateOpen] = useState(false);
	const [capacityOpen, setCapacityOpen] = useState(false);

	const handleRegionOpen = () => {
		setRegionOpen((prev) => !prev);
	};
	const handleOptionOpen = () => {
		setOptionOpen((prev) => !prev);
	};
	const handleDateOpen = () => {
		setDateOpen((prev) => !prev);
	};
	const handleCapacityOpen = () => {
		setCapacityOpen((prev) => !prev);
	};

	useEffect(() => {
		console.log('region changed to:', region);
		setRegionOpen(false);
		setOptionOpen(false);
	}, [region]);

	return (
		<main className="">
			<RegionHeader />
			<div className="pt-[48px]">
				<RegionListNav
					handleRegionOpen={handleRegionOpen}
					handleOptionOpen={handleOptionOpen}
				/>
				<Suspense fallback={<>loading...</>}>
					<RegionItems />
				</Suspense>
			</div>
			<CategoryRegionModal isOpen={regionOpen} handleOpen={handleRegionOpen} />
			<RegionProdOptionModal
				isOpen={optionOpen}
				handleOpen={handleOptionOpen}
				handleCapaOpen={handleCapacityOpen}
				handleDateOpen={handleDateOpen}
			/>
			<CalendarModal isOpen={dateOpen} handleOpen={handleDateOpen} />
			<RegionProdCapacityModal
				isOpen={capacityOpen}
				handleOpen={handleCapacityOpen}
			/>
		</main>
	);
}

export default Region;
