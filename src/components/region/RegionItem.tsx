import React from 'react';
import { Star } from '@mui/icons-material';
import { RegionItemProps } from 'types/Category.type';
import { formatNumberWithCommas } from 'utils/numberComma';
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import styles from './Region.module.css';

function RegionItem({ id, image, name, star, price, diff }: RegionItemProps) {
	return (
		<div className="border border-borderGray rounded-md overflow-hidden">
			<Link to={`/places/${id}`}>
				<div className={styles.itemThumb}>
					<img src={image} alt={name} />
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
						{formatNumberWithCommas(price * diff)}원~{' '}
						<span className="text-content">/{diff}박</span>
					</Typography>
				</div>
			</Link>
		</div>
	);
}

export default React.memo(RegionItem);
