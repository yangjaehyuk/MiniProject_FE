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

interface DataItem {
	id: number;
	image: string;
	name: string;
	price: number;
	star: number;
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

	// return (
	// 	<>
	// 		{isLoading ? (
	// 			<div>로딩 중</div>
	// 		) : (
	// 			<div className="flex text-xxsm px-1 py-2 justify-between items-center">
	// 				{data.data.accommodations.map((item: DataItem) => (
	// 					<div className="flex flex-col w-[120px] h-[250px]" key={item.id}>
	// 						<img src={item.image} alt="item" width={120} />
	// 						<span className="text-sm my-1">{item.name}</span>
	// 						<div className="flex justify-start">
	// 							<img src={star} alt="star" />
	// 							<div className="ml-1 font-semibold">{item.star}</div>
	// 						</div>
	// 						<div className="flex justify-end font-semibold text-content">
	// 							{item.price}원 ~
	// 						</div>
	// 					</div>
	// 				))}
	// 			</div>
	// 		)}
	// 	</>
	// );
};

export default GoodsList;
