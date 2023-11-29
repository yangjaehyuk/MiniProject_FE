import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
	items: Array<string> | undefined;
}

export default function RoomImageSwiper({ items }: Props) {
	return (
		<Swiper
			slidesPerView={'auto'}
			slidesPerGroup={1}
			navigation={true}
			loop={true}
			modules={[Navigation]}
			className="roomImageSwiper"
		>
			{items &&
				items.map((item, index) => (
					<SwiperSlide key={index}>
						<div>
							<img
								src={item}
								alt="숙소사진"
								className="w-[320px] h-[160px] rounded-lg"
							/>
							<p className="absolute bottom-1 right-1 text-xs text-white font-bold bg-transparentGray px-1 py-[2px]">
								{index + 1}/{items.length}
							</p>
						</div>
					</SwiperSlide>
				))}
		</Swiper>
	);
}
