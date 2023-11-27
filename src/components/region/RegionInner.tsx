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
	searchParams,
	handleChangeParams,
}: RegionListNavProps) {
	const { ref, inView } = useInView();
	const { data, refetch } = useQueryRegion(inView);

	if (!data?.pages[0]) return null;
	return (
		<div className={styles.regionInner}>
			<RegionListNav
				handleRegionOpen={handleRegionOpen}
				handleOptionOpen={handleOptionOpen}
				totalElements={data?.pages[0].data.totalElements}
				refetch={refetch}
				searchParams={searchParams}
				handleChangeParams={handleChangeParams}
			/>
			<RegionItems triggerRef={ref} data={data} />
		</div>
	);
}

export default RegionInner;
