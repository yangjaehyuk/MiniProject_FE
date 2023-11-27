import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { RegionListItem } from 'types/Region.type';
import styles from './Category.module.css';
import { Typography } from '@material-tailwind/react';

function CategorySelcRegionItem({ name, image, link, author }: RegionListItem) {
	const params = useParams();

	return (
		<div className="aspect-square lg:aspect-video rounded-lg overflow-hidden">
			<Link
				to={`/${params.category}/${link}`}
				className="block relative h-full"
			>
				<div className={styles.itemImage}>
					<img src={image} alt={name} />
				</div>
				<div className={styles.regionOverlay}>
					<Typography variant="h5">{name}</Typography>
					{author !== '' && (
						<Typography variant="small" className="opacity-50">
							사진 : Unsplash의 {author}
						</Typography>
					)}
				</div>
			</Link>
		</div>
	);
}

export default CategorySelcRegionItem;
