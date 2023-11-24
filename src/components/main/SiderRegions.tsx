import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Sider.module.css';
import { REGIONS } from 'types/Region.type';

function SiderRegions() {
	return (
		<Swiper slidesPerView={'auto'} slidesPerGroup={1}>
			{REGIONS.map((region) => (
				<SwiperSlide key={region.name} className={styles.item}>
					<div className="pl-5">
						<div className="aspect-square rounded-full overflow-hidden mb-2">
							<img src={region.image} alt={region.name} />
						</div>
						<p className="text-center">{region.name}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default SiderRegions;
