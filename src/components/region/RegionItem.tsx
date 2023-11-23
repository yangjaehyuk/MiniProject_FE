import React from 'react';
import { Star } from '@mui/icons-material';
import { ProductItem } from 'types/Category.type';
import { formatNumberWithCommas } from 'utils/numberComma';

function RegionItem({ image, title, rating, price }: ProductItem) {
	return (
		<div className="border border-borderGray rounded-md overflow-hidden">
			<div className="item-image">
				<img src={image} alt={title} />
			</div>
			<div className="item-desc p-3">
				<h4 className="text-sm lg:text-[1rem]">{title}</h4>
				<p>
					<Star
						sx={{
							color: '#FFE500',
							fontSize: '0.875rem',
							verticalAlign: 'initial',
						}}
					/>{' '}
					{rating}
				</p>
				<h5 className="text-right text-title font-semibold">
					{formatNumberWithCommas(price)}원~
				</h5>
			</div>
		</div>
	);
}

export default React.memo(RegionItem);
