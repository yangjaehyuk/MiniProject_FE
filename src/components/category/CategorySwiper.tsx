import React from 'react';
import { Star } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { CategoryItemProps } from 'types/Category.type';
import styles from './Category.module.css';

function CategoryItem({ items }: CategoryItemProps) {
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
					<div>
						<img src={item.image} alt="" />
					</div>
					<div className="pl-3">
						<h4 className="h-12 mt-4">{item.title}</h4>
						<p>
							<Star
								sx={{
									color: '#FFE500',
									fontSize: '0.875rem',
									verticalAlign: 'initial',
								}}
							/>{' '}
							{item.rating}
						</p>
						<div className="text-[16px] font-semibold text-right">
							{item.price}원~
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default CategoryItem;
