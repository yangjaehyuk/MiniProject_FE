import React from 'react';
import { Star } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ProductSwiperProps } from 'types/Category.type';
import { formatNumberWithCommas } from 'utils/numberComma';
import styles from './Category.module.css';
import { Link } from 'react-router-dom';

function CategorySwiper({ items }: ProductSwiperProps) {
	return (
		<Swiper
			slidesPerView={'auto'}
			slidesPerGroup={1}
			spaceBetween={12}
			navigation={true}
			modules={[Navigation]}
			className={styles.categorySwiper}
		>
			{items.map((item) => (
				<SwiperSlide key={item.id} className={styles.item}>
					<Link to={`/places/${item.id}`}>
						<div className={styles.imageSquare}>
							<img src={item.image} alt={item.name} />
						</div>
						<div className="pl-3">
							<h4 className="text-content h-12 mt-4">{item.name}</h4>
							<p className="text-content font-semibold">
								<Star
									sx={{
										color: '#FFE500',
										fontSize: '0.875rem',
										verticalAlign: 'initial',
									}}
								/>{' '}
								{item.star}
							</p>
							<div className="text-[16px] font-semibold text-right">
								{formatNumberWithCommas(item.price)}원~
							</div>
						</div>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default CategorySwiper;
