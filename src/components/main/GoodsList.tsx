import React from 'react';
import star from '../../assets/images/icon-star.svg';
import { useQueryMainCategory } from 'hooks/main/useQueryMainRegion';
import { Link } from 'react-router-dom';
import CategorySwiper from 'components/category/CategorySwiper';
import CategorySwiperSkeleton from 'components/category/skeleton/CategorySwiperSkeleton';

interface GoodsListProps {
	type: string;
	title: string;
}

const GoodsList: React.FC<GoodsListProps> = ({ type, title }) => {
	const { data, isLoading } = useQueryMainCategory(type);

	return (
		<div className="py-5">
			<div className="flex justify-between items-center mb-5">
				<h3 className="font-semibold">{title}</h3>
				<Link to={`/${type}`} className="text-blue font-semibold">
					전체보기
				</Link>
			</div>
			{isLoading && <CategorySwiperSkeleton />}
			{data && <CategorySwiper items={data.data.accommodations} />}
		</div>
	);
};

export default GoodsList;
