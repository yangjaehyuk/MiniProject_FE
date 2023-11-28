import React, { useState } from 'react';
import CategoryInner from 'components/category/CategoryInner';
import CategoryRegionModal from 'components/category/CategorySelcRegion';
import categoryCheckRouter from 'components/category/CategoryCheckRouter';
import CommonHeader from 'components/common/CommonHeader';

function Category() {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<main>
			<CommonHeader type="category" isCartIcon />
			<CategoryInner handleOpen={handleOpen} />
			<CategoryRegionModal isOpen={isOpen} handleOpen={handleOpen} />
		</main>
	);
}

export default categoryCheckRouter(Category);
