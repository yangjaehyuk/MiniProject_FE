import React from 'react';
import CategoryTopItem from 'components/category/CategoryTopItem';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQueryRegionBest } from 'hooks/regionProd/useQueryRegionBest';
import { RegionProdBestItemsProps } from 'types/RegionProd.type';
import 'swiper/css';
import CategoryTopSkeletonItem from 'components/category/skeleton/CategoryTopSkeletonItem';

function RegionProdBestItems({ setSwiper }: RegionProdBestItemsProps) {
	const { data: hotel, isLoading: hotelIsLoading } =
		useQueryRegionBest('HOTEL');
	const { data: resort, isLoading: resortIsLoading } =
		useQueryRegionBest('RESORT');
	const { data: pension, isLoading: pensionIsLoading } =
		useQueryRegionBest('PENSION');
	const { data: poolvilla, isLoading: poolvillaIsLoading } =
		useQueryRegionBest('POOL_VILLA');

	return (
		<Swiper onSwiper={(swiper: SwiperCore) => setSwiper(swiper)}>
			<SwiperSlide>
				<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
					{hotel?.data.accommodations.map((item, index) => (
						<CategoryTopItem key={item.id} {...item} index={index} />
					))}
					{hotelIsLoading &&
						new Array(6)
							.fill(0)
							.map((_, index) => <CategoryTopSkeletonItem key={index} />)}
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
					{resort?.data.accommodations.map((item, index) => (
						<CategoryTopItem key={item.id} {...item} index={index} />
					))}
					{resortIsLoading &&
						new Array(6)
							.fill(0)
							.map((_, index) => <CategoryTopSkeletonItem key={index} />)}
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
					{pension?.data.accommodations.map((item, index) => (
						<CategoryTopItem key={item.id} {...item} index={index} />
					))}
					{pensionIsLoading &&
						new Array(6)
							.fill(0)
							.map((_, index) => <CategoryTopSkeletonItem key={index} />)}
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
					{poolvilla?.data.accommodations.map((item, index) => (
						<CategoryTopItem key={item.id} {...item} index={index} />
					))}
					{poolvillaIsLoading &&
						new Array(6)
							.fill(0)
							.map((_, index) => <CategoryTopSkeletonItem key={index} />)}
				</div>
			</SwiperSlide>
		</Swiper>
	);
}

export default RegionProdBestItems;
