import React from 'react';
import styles from '../Category.module.css';
import { Image } from '@mui/icons-material';

function CategorySwiperSkeleton() {
	return (
		<div
			className={`${styles.categorySwiper} flex flex-nowrap overflow-hidden`}
		>
			{new Array(5).fill(0).map((_, index) => (
				<div
					role="status"
					key={index}
					className={`${styles.item} animate-pulse mr-[12px] shrink-0`}
				>
					<div className="flex items-center justify-center aspect-square mb-5 bg-gray rounded">
						<Image className="text-lightGray" fontSize="large" />
					</div>
					<div className="h-4 bg-gray rounded-full w-full mb-2"></div>
					<div className="h-4 bg-gray rounded-full w-20 mb-2"></div>
					<div className="h-4 bg-gray rounded-full w-8 mb-2.5"></div>
					<div className="h-4 bg-gray rounded-full w-24 ml-auto"></div>
				</div>
			))}
		</div>
	);
}

export default CategorySwiperSkeleton;
