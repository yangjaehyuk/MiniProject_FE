import React from 'react';
import Modal from '@mui/material/Modal';
import { Close, Done } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import { useRecoilState } from 'recoil';
import { dateState } from 'recoil/atoms/myPageAtom';

const DateModal = ({ open, onClose }: any) => {
	const [nowDate, setNowDate] = useRecoilState(dateState);
	return (
		<Modal
			open={open}
			onClose={onClose}
			className="flex items-end justify-center"
			style={{ outline: 'none' }}
		>
			<Box
				sx={{
					width: '620px',
					backgroundColor: 'background.paper',
					borderRadius: 2,
				}}
			>
				<div className="flex items-center justify-between p-3">
					<Close onClick={onClose} className="cursor-pointer" />
					<Typography variant="h6">
						<div className="font-bold text-title">기간 선택</div>
					</Typography>
					<div className="m-2"></div>
				</div>
				<div className="p-3">
					<Typography component="div">
						<div className="flex items-center">
							<div
								className={`flex justify-between w-1/2 cursor-pointer p-3 hover:bg-lightGray ${
									nowDate === '최근 3개월' ? 'text-blue' : 'text-black'
								}`}
								onClick={() => {
									setNowDate('최근 3개월');
									onClose();
								}}
							>
								최근 3개월
								<Done
									className={`${
										nowDate === '최근 3개월' ? 'text-blue' : 'text-black'
									}`}
								/>
							</div>
							<div
								className={`flex justify-between w-1/2 cursor-pointer p-3 hover:bg-lightGray ${
									nowDate === '최근 6개월' ? 'text-blue' : 'text-black'
								}`}
								onClick={() => {
									setNowDate('최근 6개월');
									onClose();
								}}
							>
								최근 6개월
								<Done
									className={`${
										nowDate === '최근 6개월' ? 'text-blue' : 'text-black'
									}`}
								/>
							</div>
						</div>
						<div className="flex items-center pb-5">
							<div
								className={`flex justify-between w-1/2 cursor-pointer p-3 hover:bg-lightGray ${
									nowDate === '최근 1년' ? 'text-blue' : 'text-black'
								}`}
								onClick={() => {
									setNowDate('최근 1년');
									onClose();
								}}
							>
								최근 1년
								<Done
									className={`${
										nowDate === '최근 1년' ? 'text-blue' : 'text-black'
									}`}
								/>
							</div>
							<div
								className={`flex justify-between w-1/2 cursor-pointer p-3 hover:bg-lightGray ${
									nowDate === '최근 2년' ? 'text-blue' : 'text-black'
								}`}
								onClick={() => {
									setNowDate('최근 2년');
									onClose();
								}}
							>
								최근 2년
								<Done
									className={`${
										nowDate === '최근 2년' ? 'text-blue' : 'text-black'
									}`}
								/>
							</div>
						</div>
					</Typography>
				</div>
			</Box>
		</Modal>
	);
};

export default DateModal;
