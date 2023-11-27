import React, { Suspense, useCallback, useEffect, useState } from 'react';
import RegionHeader from 'components/region/RegionHeader';
import CategoryRegionModal from 'components/category/CategorySelcRegion';
import { useParams, useSearchParams } from 'react-router-dom';
import RegionProdOptionModal from 'components/region/RegionProdOptionModal';
import RegionProdCapacityModal from 'components/region/RegionProdCapacityModal';
import CalendarModal from 'components/common/CalendarModal';
import RegionInner from 'components/region/RegionInner';
import RegionInnerSkeleton from 'components/region/skeleton/RegionInnerSkeleton';
import CriticalErrorBoundary from 'components/common/CriticalErrorBoundary';
import RetryErrorBoundary from 'components/common/RetryErrorBoundary';
import regionCheckRouter from 'components/region/regionCheckRouter';
import { OrderEnum } from 'recoil/atoms/orderAtom';

function Region() {
	const [searchParams, setSearchParams] = useSearchParams();
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

	const handleChangeParams = useCallback(
		(order: OrderEnum) => {
			const newSearchParams = searchParams;
			newSearchParams.set('order', order);
			setSearchParams(newSearchParams);
		},
		[searchParams],
	);

	useEffect(() => {
		// console.log('region changed to:', region);
		setRegionOpen(false);
		setOptionOpen(false);
	}, [region]);

	return (
		<main className="">
			<RegionHeader />
			<CriticalErrorBoundary>
				<RetryErrorBoundary>
					<Suspense
						fallback={
							<RegionInnerSkeleton
								handleRegionOpen={handleRegionOpen}
								handleOptionOpen={handleOptionOpen}
								searchParams={searchParams}
								handleChangeParams={handleChangeParams}
							/>
						}
					>
						<RegionInner
							handleRegionOpen={handleRegionOpen}
							handleOptionOpen={handleOptionOpen}
							searchParams={searchParams}
							handleChangeParams={handleChangeParams}
						/>
					</Suspense>
				</RetryErrorBoundary>
			</CriticalErrorBoundary>
			<CategoryRegionModal isOpen={regionOpen} handleOpen={handleRegionOpen} />
			<RegionProdOptionModal
				isOpen={optionOpen}
				handleOpen={handleOptionOpen}
				handleCapaOpen={handleCapacityOpen}
				handleDateOpen={handleDateOpen}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>
			{dateOpen && <CalendarModal handleModal={handleDateOpen} />}
			<RegionProdCapacityModal
				isOpen={capacityOpen}
				handleOpen={handleCapacityOpen}
			/>
		</main>
	);
}

export default regionCheckRouter(Region);
