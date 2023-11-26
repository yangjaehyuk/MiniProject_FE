import React from 'react';
import { Image } from '@mui/icons-material';
import styles from '../Region.module.css';

function RegionItemSkeleton() {
	return (
		<div className="border border-borderGray rounded-md overflow-hidden animate-pulse">
			<div className={styles.itemThumb}>
				<div className="flex items-center justify-center h-full bg-gray rounded">
					<Image className="text-lightGray" fontSize="large" />
				</div>
			</div>
			<div className={styles.itemDesc}>
				<div>
					<div className="h-4 bg-gray rounded-full w-full mb-2"></div>
					<div className="h-4 bg-gray rounded-full w-16 mb-2"></div>
					<div className="h-4 bg-gray rounded-full w-8 mb-2"></div>
				</div>
				<div className="h-4 bg-gray rounded-full w-28 ml-auto"></div>
			</div>
		</div>
	);
}

export default RegionItemSkeleton;
