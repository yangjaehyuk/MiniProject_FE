import React from 'react';
import { useRecoilValue } from 'recoil';
import { endDateState, startDateState } from 'recoil/atoms/dateAtom';
import { Button } from '@material-tailwind/react';
import { Close, DateRange, Person } from '@mui/icons-material';
import styles from '../category/Category.module.css';
import { RegionProdOptionModalProps } from 'types/Region.type';
import { AnimatePresence } from 'framer-motion';
import { formatMonthDate } from 'utils/formatDate';
import { capacityState } from 'recoil/atoms/capacityAtom';

function RegionProdOptionModal({
	isOpen,
	handleOpen,
	handleCapaOpen,
	handleDateOpen,
}: RegionProdOptionModalProps) {
	const startDate = useRecoilValue(startDateState);
	const endDate = useRecoilValue(endDateState);
	const capacity = useRecoilValue(capacityState);
	const formattingDate = formatMonthDate(startDate, endDate);

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed top-0 left-0 right-0 h-52 lg:h-56 z-10 bg-white">
					<div className="p-4">
						<div className={styles.dialogWrap}>
							<div className="flex items-center text-black">
								<Button onClick={handleOpen} variant="text" size="sm">
									<Close />
								</Button>
								<h2 className="text-title font-semibold">옵션 선택</h2>
							</div>
						</div>
					</div>
					<div className={`${styles.dialogWrap} p-4`}>
						<div className="grid grid-cols-2 gap-3 text-black mb-3">
							<Button
								fullWidth
								variant="outlined"
								size="sm"
								className="flex items-center gap-1 border-borderGray"
								onClick={handleDateOpen}
							>
								<DateRange />
								<span className="text-content lg:text-title font-normal">
									{formattingDate}
								</span>
							</Button>
							<Button
								fullWidth
								variant="outlined"
								size="sm"
								className="flex items-center gap-1 border-borderGray"
								onClick={handleCapaOpen}
							>
								<Person />
								<span className="text-content lg:text-title font-normal">
									성인 {capacity}명
								</span>
							</Button>
						</div>
						<Button
							fullWidth
							variant="filled"
							className="bg-primary"
							onClick={handleOpen}
						>
							<span className="text-content lg:text-title font-normal">
								적용하기
							</span>
						</Button>
					</div>
				</div>
			)}
		</AnimatePresence>
	);
}

export default RegionProdOptionModal;
