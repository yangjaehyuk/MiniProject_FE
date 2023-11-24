import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageItems } from 'types/ImageItem'

interface Props {
    items : ImageItems[]
}

export default function ImageSwiper({items} :Props) {
  return (
    <Swiper
    slidesPerView={'auto'}
    slidesPerGroup={1}
    navigation={true}
    loop={true}
    modules={[Navigation]}
    
    >
        {items.map((item) => (
            <SwiperSlide key={item.id}>
                <div>
                <img
					src={item.image}
					alt="숙소사진"
                    className='w-full h-[507px]'
				/>
                <p className='absolute bottom-1 right-1 text-xs text-white font-bold bg-transparentGray px-1 py-[2px]'>{item.id}/{items.length}</p>

                </div>
                
            </SwiperSlide>
        ))}

    </Swiper>
  )
}
