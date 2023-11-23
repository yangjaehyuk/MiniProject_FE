import React, { useReducer } from 'react';
import {
	Button,
	Dialog,
	DialogBody,
	DialogHeader,
	IconButton,
} from '@material-tailwind/react';
import { Add, Close, Remove } from '@mui/icons-material';
import styles from '../category/Category.module.css';
import { CapacityAction } from 'types/Region.type';
import { capaReducer } from 'utils/capacityReducer';
import { ModalProps } from 'types/Category.type';

function RegionProdCapacityModal({ isOpen, handleOpen }: ModalProps) {
	const [state, dispatch] = useReducer(capaReducer, 2);

	return (
		<Dialog open={isOpen} handler={handleOpen} size="xxl" className="bg-bgGray">
			<DialogHeader className="bg-white">
				<div className={styles.dialogWrap}>
					<div className="flex items-center text-black">
						<Button onClick={handleOpen} variant="text" size="sm">
							<Close />
						</Button>
						<h2 className="text-title font-semibold">옵션 선택</h2>
					</div>
				</div>
			</DialogHeader>
			<DialogBody className={`${styles.dialogWrap} ${styles.dialogBody}`}>
				<div className="flex justify-between">
					<h4 className="text-title font-semibold text-black">성인</h4>
					<div className="flex items-center">
						<IconButton
							variant="outlined"
							className="rounded-full"
							onClick={() => dispatch({ type: CapacityAction.COUNT_DOWN })}
						>
							<Remove />
						</IconButton>
						<p className="px-5 text-black w-12 text-content font-semibold">
							{state}
						</p>
						<IconButton
							variant="outlined"
							className="rounded-full"
							onClick={() => dispatch({ type: CapacityAction.COUNT_UP })}
						>
							<Add />
						</IconButton>
					</div>
				</div>
			</DialogBody>
		</Dialog>
	);
}

export default RegionProdCapacityModal;
