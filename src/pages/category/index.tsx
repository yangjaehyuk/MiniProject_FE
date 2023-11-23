import React, { useState } from 'react';
import CategoryHeader from 'components/category/CategoryHeader';
import CategoryInner from 'components/category/CategoryInner';
import CategoryRegionModal from 'components/category/CategorySelcRegion';

function Category() {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<main>
			<CategoryHeader />
			<CategoryInner handleOpen={handleOpen} />
			<CategoryRegionModal isOpen={isOpen} handleOpen={handleOpen} />
		</main>
	);
}

export default Category;
