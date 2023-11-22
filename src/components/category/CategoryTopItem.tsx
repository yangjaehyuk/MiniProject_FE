import React from 'react';
import { Star } from '@mui/icons-material';
import { ProductItem } from 'types/Category.type';
import { formatNumberWithCommas } from 'utils/numberComma';

function CategoryTopItem({ image, price, rating, title }: ProductItem) {
	return (
		<div className="border border-borderGray rounded-md overflow-hidden">
			<div className="flex">
				<div className="w-4/12">
					<div className="item-image">
						<img src={image} alt={title} />
					</div>
				</div>
				<div className="w-8/12">
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
			</div>
		</div>
	);
}

export default CategoryTopItem;
