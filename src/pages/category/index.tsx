import React, { useState } from 'react';
import CategoryInner from 'components/category/CategoryInner';
import CategoryRegionModal from 'components/category/CategorySelcRegion';
import categoryCheckRouter from 'components/category/CategoryCheckRouter';
import CommonHeader from 'components/common/CommonHeader';
import useScrollToShow from 'hooks/common/handleScroll';
import TopBtn from 'components/common/TopBtn';

function Category() {
	const [isOpen, setIsOpen] = useState(false);
	const show = useScrollToShow(false, 200);
	const handleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<main>
			<CommonHeader type="category" isCartIcon />
			<CategoryInner handleOpen={handleOpen} />
			<CategoryRegionModal isOpen={isOpen} handleOpen={handleOpen} />
			{show && <TopBtn show={show} />}
		</main>
	);
}

export default categoryCheckRouter(Category);
