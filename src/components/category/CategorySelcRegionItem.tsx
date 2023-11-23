import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RegionListItem } from 'types/Region.type';
import styles from './Category.module.css';
import { Typography } from '@material-tailwind/react';

function CategorySelcRegionItem({
	name,
	image,
	link,
	author,
	right1,
	right2,
}: RegionListItem) {
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
					<Typography variant="small" className="">
						사진 : <a href={right1}>Unsplash</a>의 <a href={right2}>{author}</a>
					</Typography>
				</div>
			</Link>
		</div>
	);
}

export default CategorySelcRegionItem;
