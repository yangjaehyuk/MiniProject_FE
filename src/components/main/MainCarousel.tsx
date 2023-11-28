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
		{ id: 'carousel1', src: carousel1 },
		{ id: 'carousel2', src: carousel2 },
		{ id: 'carousel3', src: carousel3 },
		{ id: 'carousel4', src: carousel4 },
		{ id: 'carousel5', src: carousel5 },
		{ id: 'carousel6', src: carousel6 },
		{ id: 'carousel7', src: carousel7 },
		{ id: 'carousel8', src: carousel8 },
		{ id: 'carousel9', src: carousel9 },
		{ id: 'carousel10', src: carousel10 },
		{ id: 'carousel11', src: carousel11 },
		{ id: 'carousel12', src: carousel12 },
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
						<SwiperSlide key={item.id}>
							<img
								src={item.src}
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
