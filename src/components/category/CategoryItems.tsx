import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from './Category.module.css';
import { CATEGORY_SEOUL_DATA } from 'types/Category.type';
import { Star } from '@mui/icons-material';

function CategoryItems() {
	return (
		<div className="p-5">
			<h3 className="text-title font-semibold mb-5">서울 추천 상품</h3>
			<Swiper
				slidesPerView={'auto'}
				slidesPerGroup={1}
				spaceBetween={12}
				navigation={true}
				modules={[Navigation]}
				className={styles.categorySwiper}
			>
				{CATEGORY_SEOUL_DATA.map((item) => (
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
				<SwiperSlide className={styles.item}>Slide 6</SwiperSlide>
				<SwiperSlide className={styles.item}>Slide 7</SwiperSlide>
				<SwiperSlide className={styles.item}>Slide 8</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default CategoryItems;
