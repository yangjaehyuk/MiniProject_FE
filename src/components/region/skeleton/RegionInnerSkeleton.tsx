import React from 'react';
import RegionListNav from '../RegionListNav';
import RegionItemsSkeleton from './RegionItemsSkeleton';
import { RegionListNavSkeletonProps } from 'types/Region.type';
import styles from '../Region.module.css';

function RegionInnerSkeleton({
	handleOptionOpen,
	handleRegionOpen,
	searchParams,
	handleChangeParams,
}: RegionListNavSkeletonProps) {
	return (
		<div className={styles.regionInner}>
			<RegionListNav
				handleRegionOpen={handleRegionOpen}
				handleOptionOpen={handleOptionOpen}
				totalElements={0}
				searchParams={searchParams}
				handleChangeParams={handleChangeParams}
			/>
			<RegionItemsSkeleton />
		</div>
	);
}

export default RegionInnerSkeleton;
