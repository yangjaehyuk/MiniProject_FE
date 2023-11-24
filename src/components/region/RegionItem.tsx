import React from 'react';
import { Star } from '@mui/icons-material';
import { ProductItem } from 'types/Category.type';
import { formatNumberWithCommas } from 'utils/numberComma';

function RegionItem({ thumbnail, name, star, price }: ProductItem) {
	return (
		<div className="border border-borderGray rounded-md overflow-hidden">
			<div className="item-image">
				<img src={thumbnail} alt={name} />
			</div>
			<div className="item-desc p-3">
				<h4 className="text-sm lg:text-[1rem]">{name}</h4>
				<p>
					<Star
						sx={{
							color: '#FFE500',
							fontSize: '0.875rem',
							verticalAlign: 'initial',
						}}
					/>{' '}
					{star}
				</p>
				<h5 className="text-right text-title font-semibold">
					{formatNumberWithCommas(price)}원~
				</h5>
			</div>
		</div>
	);
}

export default React.memo(RegionItem);
