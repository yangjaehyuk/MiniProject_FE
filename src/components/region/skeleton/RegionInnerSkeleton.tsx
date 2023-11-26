import React from 'react';
import RegionListNav from '../RegionListNav';
import RegionItemsSkeleton from './RegionItemsSkeleton';
import { RegionListNavProps } from 'types/Region.type';
import styles from '../Region.module.css';

function RegionInnerSkeleton({
	handleOptionOpen,
	handleRegionOpen,
}: RegionListNavProps) {
	return (
		<div className={styles.regionInner}>
			<RegionListNav
				handleRegionOpen={handleRegionOpen}
				handleOptionOpen={handleOptionOpen}
				totalElements={0}
			/>
			<RegionItemsSkeleton />
		</div>
	);
}

export default RegionInnerSkeleton;
