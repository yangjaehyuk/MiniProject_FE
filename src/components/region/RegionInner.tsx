import React from 'react';
import RegionListNav from './RegionListNav';
import { RegionListNavProps } from 'types/Region.type';
import RegionItems from './RegionItems';
import { useInView } from 'react-intersection-observer';
import useQueryRegion from 'hooks/region/useQueryRegion';
import styles from './Region.module.css';
import RegionItemsSkeleton from './skeleton/RegionItemsSkeleton';

function RegionInner({
	handleOptionOpen,
	handleRegionOpen,
}: RegionListNavProps) {
	const { ref, inView } = useInView();
	// const data = useQueryRegion(inView);

	return (
		<div className={styles.regionInner}>
			<RegionListNav
				handleRegionOpen={handleRegionOpen}
				handleOptionOpen={handleOptionOpen}
				totalElements={0}
				// totalElements={data?.pages[0].data.totalElements}
			/>
			{/* TODO: 백엔드 완료 후 스켈레톤 UI는 삭제 필요 */}
			<RegionItemsSkeleton />
			{/* <RegionItems triggerRef={ref} data={data} /> */}
		</div>
	);
}

export default RegionInner;
