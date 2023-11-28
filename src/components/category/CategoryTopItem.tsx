import React from 'react';
import { Star } from '@mui/icons-material';
import { TopRateItemProps } from 'types/Category.type';
import { formatNumberWithCommas } from 'utils/numberComma';
import styles from './Category.module.css';
import { Link } from 'react-router-dom';

function CategoryTopItem({
	id,
	image,
	price,
	star,
	name,
	index,
}: TopRateItemProps) {
	return (
		<Link to={`/places/${id}`}>
			<div className="flex">
				<div className={styles.itemThumb}>
					<div className={styles.imageSquare}>
						<img src={image} alt={name} />
					</div>
					<div className={styles.rate}>{index + 1}</div>
				</div>
				<div className="w-8/12">
					<div className="item-desc p-3">
						<h4 className="text-sm lg:text-content h-10 leading-5">{name}</h4>
						<p className="text-sm font-semibold">
							<Star
								sx={{
									color: '#FFE500',
									fontSize: '1rem',
									verticalAlign: 'top',
								}}
							/>{' '}
							{star}
						</p>
						<h5 className="text-right text-title font-semibold">
							{formatNumberWithCommas(price)}원~
						</h5>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default CategoryTopItem;
