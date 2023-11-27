import React from 'react';
import carousel1 from '../../assets/images/carousel1.svg';
import carousel2 from '../../assets/images/carousel2.svg';
import carousel3 from '../../assets/images/carousel3.svg';
import carousel4 from '../../assets/images/carousel1.svg';
import carousel5 from '../../assets/images/carousel2.svg';
import carousel6 from '../../assets/images/carousel3.svg';
import carousel7 from '../../assets/images/carousel1.svg';
import carousel8 from '../../assets/images/carousel2.svg';
import carousel9 from '../../assets/images/carousel3.svg';
import carousel10 from '../../assets/images/carousel1.svg';
import carousel11 from '../../assets/images/carousel2.svg';
import carousel12 from '../../assets/images/carousel3.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Carouse.css';

const MainCarousel = () => {
	const carouselDate = [
		carousel1,
		carousel2,
		carousel3,
		carousel4,
		carousel5,
		carousel6,
		carousel7,
		carousel8,
		carousel9,
		carousel10,
		carousel11,
		carousel12,
	];

	return (
		<div>
			<div className="my-3 flex ">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={10}
					slidesPerView={2.5}
					scrollbar={{ draggable: true }}
					navigation
					pagination={{
						type: 'fraction',
					}}
				>
					{carouselDate.map((item) => (
						<SwiperSlide key={item}>
							<img
								src={item}
								alt="{item}"
								className="h-[125px] mr-4 rounded-md"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default MainCarousel;
