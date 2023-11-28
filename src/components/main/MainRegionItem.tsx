import React, { useId } from 'react';
import { useQueryMainRegion } from 'hooks/main/useQueryMainRegion';
import { Accommodation } from './MainRegionList';
import { formatNumberWithCommas } from 'utils/numberComma';
import styles from '../category/Category.module.css';
import { Star } from '@mui/icons-material';

interface MainRegionItemProps {
	accommodations: Accommodation[];
}

const MainRegionItem: React.FC<MainRegionItemProps> = ({ accommodations }) => {
	const id = useId();
	return (
		<div>
			<div className="grid gap-4 grid-cols-1 lg:grid-cols-2 my-4">
				{accommodations.map((item, index) => (
					<div className="flex" key={`${id}/${item.id}`}>
						<div className={styles.itemThumb}>
							<div className={styles.itemImage}>
								<img src={item.image} alt={item.name} />
							</div>
							<div className={styles.rate}>{index + 1}</div>
						</div>
						<div className="w-8/12">
							<div className="item-desc p-3">
								<h4 className="text-sm lg:text-content h-10 leading-5">
									{item.name}
								</h4>
								<p className="text-content font-semibold">
									<Star
										sx={{
											color: '#FFE500',
											fontSize: '1rem',
											verticalAlign: 'top',
										}}
									/>{' '}
									{item.star}
								</p>
								<h5 className="text-right text-title font-semibold">
									{formatNumberWithCommas(item.price)}원~
								</h5>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MainRegionItem;
