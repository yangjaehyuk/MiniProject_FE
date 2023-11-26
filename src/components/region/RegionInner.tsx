import React from 'react';
import RegionListNav from './RegionListNav';
import { RegionListNavProps } from 'types/Region.type';
import RegionItems from './RegionItems';
import { useInView } from 'react-intersection-observer';
import useQueryRegion from 'hooks/region/useQueryRegion';
import styles from './Region.module.css';

function RegionInner({
	handleOptionOpen,
	handleRegionOpen,
}: RegionListNavProps) {
	const { ref, inView } = useInView();
	const data = useQueryRegion(inView);

	return (
		<div className={styles.regionInner}>
			<RegionListNav
				handleRegionOpen={handleRegionOpen}
				handleOptionOpen={handleOptionOpen}
				totalElements={data?.pages[0].data.totalElements}
			/>
			<RegionItems triggerRef={ref} data={data} />
		</div>
	);
}

export default RegionInner;
