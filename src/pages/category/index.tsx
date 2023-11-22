import React from 'react';
import CategoryHeader from 'components/category/CategoryHeader';
import CategoryInner from 'components/category/CategoryInner';
import styles from 'components/category/Category.module.css';

function Category() {
	return (
		<main className={styles.bodyContainer}>
			<CategoryHeader />
			<CategoryInner />
		</main>
	);
}

export default Category;
