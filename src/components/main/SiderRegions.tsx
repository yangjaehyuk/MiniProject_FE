import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Sider.module.css';
import { REGIONS } from 'types/Region.type';
import { SiderRegionsProps } from 'types/MainPage.type';
import { Link } from 'react-router-dom';

function SiderRegions({ isMain }: SiderRegionsProps) {
	return (
		<Swiper slidesPerView={'auto'} slidesPerGroup={1}>
			{REGIONS.map((region) => (
				<SwiperSlide
					key={region.name}
					className={isMain ? styles.itemBig : styles.item}
				>
					<Link to={`/region/${region.link}`}>
						<div className="pl-5">
							<div className="aspect-square rounded-full overflow-hidden mb-2">
								<img src={region.image} alt={region.name} />
							</div>
							<p className="text-center">{region.name}</p>
						</div>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default SiderRegions;
