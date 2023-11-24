import React, { useEffect, useReducer } from 'react';
import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	IconButton,
} from '@material-tailwind/react';
import { Add, Close, Remove } from '@mui/icons-material';
import { CapacityAction } from 'types/Region.type';
import { capaReducer } from 'utils/capacityReducer';
import { ModalProps } from 'types/Category.type';
import { useSetRecoilState } from 'recoil';
import { capacityState } from 'recoil/atoms/capacityAtom';
import styles from '../category/Category.module.css';

function RegionProdCapacityModal({ isOpen, handleOpen }: ModalProps) {
	const [state, dispatch] = useReducer(capaReducer, 2);
	const setCapacity = useSetRecoilState(capacityState);

	const handleApply = () => {
		handleOpen();
		setCapacity(state);
	};

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
			<DialogFooter className={`${styles.dialogWrap} bg-white`}>
				<Button
					fullWidth
					variant="filled"
					className="bg-primary"
					onClick={handleApply}
				>
					<span className="text-content lg:text-title font-normal">
						적용하기
					</span>
				</Button>
			</DialogFooter>
		</Dialog>
	);
}

export default RegionProdCapacityModal;
