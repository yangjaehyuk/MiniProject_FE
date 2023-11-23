import React from 'react';
import { ModalProps } from 'types/Category.type';
import {
	Button,
	Dialog,
	DialogBody,
	DialogHeader,
} from '@material-tailwind/react';
import { Close } from '@mui/icons-material';
import { REGION_LIST } from 'types/Region.type';
import CategorySelcRegionItem from './CategorySelcRegionItem';
import styles from './Category.module.css';

function CategoryRegionModal({ isOpen, handleOpen }: ModalProps) {
	return (
		<Dialog open={isOpen} handler={handleOpen} size="xxl" className="bg-bgGray">
			<DialogHeader className="bg-white">
				<div className={styles.dialogWrap}>
					<div className="flex items-center text-black">
						<Button onClick={handleOpen} variant="text" size="sm">
							<Close />
						</Button>
						<h2 className="text-title font-semibold">지역 선택</h2>
					</div>
				</div>
			</DialogHeader>
			<DialogBody className={`${styles.dialogWrap} ${styles.dialogBody}`}>
				<div className="grid grid-cols-2 gap-3">
					{REGION_LIST.map((region) => (
						<CategorySelcRegionItem key={region.name} {...region} />
					))}
				</div>
			</DialogBody>
		</Dialog>
	);
}

export default CategoryRegionModal;
