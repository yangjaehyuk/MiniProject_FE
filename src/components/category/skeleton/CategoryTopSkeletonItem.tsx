import React from 'react';
import styles from '../Category.module.css';
import { Image } from '@mui/icons-material';

function CategoryTopSkeletonItem() {
	return (
		<div className="animate-pulse">
			<div className="flex">
				<div className={styles.itemThumb}>
					<div className={styles.itemImage}>
						<div className="flex items-center justify-center h-full bg-gray rounded">
							<Image className="text-lightGray" fontSize="large" />
						</div>
					</div>
				</div>
				<div className="w-8/12">
					<div className="item-desc p-3">
						<div className="h-4 bg-gray rounded-full w-full mb-2"></div>
						<div className="h-4 bg-gray rounded-full w-16 mb-2"></div>
						<div className="h-4 bg-gray rounded-full w-8 mb-2"></div>
						<div className="h-4 bg-gray rounded-full w-28 ml-auto"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CategoryTopSkeletonItem;
