import React, { Suspense } from 'react';
import CategoryHeader from 'components/category/CategoryHeader';
import RegionProdInner from 'components/regionProd/RegionProdInner';
import CriticalErrorBoundary from 'components/common/CriticalErrorBoundary';
import RetryErrorBoundary from 'components/common/RetryErrorBoundary';
import RegionProdInnerSkeleton from 'components/regionProd/skeleton/RegionProdInnerSkeleton';
import { useParams } from 'react-router-dom';
import { regionToKor } from 'utils/switchNameToKor';
import RegionProdHotpick from 'components/regionProd/RegionProdHotpick';

function RegionAllProducts() {
	const { region = '' } = useParams();
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
		</main>
	);
}

export default RegionAllProducts;
