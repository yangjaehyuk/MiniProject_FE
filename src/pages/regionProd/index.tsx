import React, { Suspense } from 'react';
import CategoryHeader from 'components/category/CategoryHeader';
import RegionProdInner from 'components/regionProd/RegionProdInner';
import CriticalErrorBoundary from 'components/common/CriticalErrorBoundary';
import RetryErrorBoundary from 'components/common/RetryErrorBoundary';
import RegionProdInnerSkeleton from 'components/regionProd/skeleton/RegionProdInnerSkeleton';
import { useParams } from 'react-router-dom';
import { regionToKor } from 'utils/switchNameToKor';
import RegionProdHotpick from 'components/regionProd/RegionProdHotpick';
import useScrollToShow from 'hooks/common/handleScroll';
import TopBtn from 'components/common/TopBtn';

function RegionAllProducts() {
	const { region = '' } = useParams();
	const show = useScrollToShow(false, 200);

	return (
		<main>
			<CategoryHeader />
			<CriticalErrorBoundary>
				<RetryErrorBoundary>
					<Suspense fallback={<RegionProdInnerSkeleton />}>
						<RegionProdInner />
					</Suspense>
				</RetryErrorBoundary>
			</CriticalErrorBoundary>
			<div className="py-4 mt-6">
				<h4 className="font-semibold mb-4">
					{regionToKor(region)} 여행 Hot Pick
				</h4>
				<RegionProdHotpick />
			</div>
			{show && <TopBtn show={show} />}
		</main>
	);
}

export default RegionAllProducts;
