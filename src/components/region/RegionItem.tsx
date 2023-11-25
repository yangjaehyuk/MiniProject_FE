import React from 'react';
import { Star } from '@mui/icons-material';
import { ProductItem } from 'types/Category.type';
import { formatNumberWithCommas } from 'utils/numberComma';
import styles from './Region.module.css';
import { Typography } from '@material-tailwind/react';

function RegionItem({ thumbnail, name, star, price }: ProductItem) {
	return (
		<div className="border border-borderGray rounded-md overflow-hidden">
			<div className={styles.itemThumb}>
				<img src={thumbnail} alt={name} />
			</div>
			<div className={styles.itemDesc}>
				<div>
					<Typography variant="h4" className="text-[1rem]">
						{name}
					</Typography>
					<Typography variant="paragraph" className="text-sm font-semibold">
						<Star
							sx={{
								color: '#FFE500',
								fontSize: '0.875rem',
								verticalAlign: 'text-bottom',
							}}
						/>{' '}
						{star}
					</Typography>
				</div>
				<Typography
					variant="h5"
					className="text-right text-title font-semibold"
				>
					{formatNumberWithCommas(price)}원~
				</Typography>
			</div>
		</div>
	);
}

export default React.memo(RegionItem);
