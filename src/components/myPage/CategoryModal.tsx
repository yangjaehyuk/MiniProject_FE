import React from 'react';
import Modal from '@mui/material/Modal';
import { Close, Done } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import { useRecoilState } from 'recoil';
import { categoryState } from 'recoil/atoms/myPageAtom';

const CategoryModal = ({ open, onClose }: any) => {
	const [nowCategory, setNowCategory] = useRecoilState(categoryState);

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
						<div className="font-bold text-title">카테고리 선택</div>
					</Typography>
					<div className="m-2"></div>
				</div>
				<div className="p-3">
					<Typography component="div">
						<div className="flex items-center">
							<Typography
								variant="body1"
								component="div"
								className={`flex justify-between w-1/2 cursor-pointer p-3 hover:bg-lightGray ${
									nowCategory === '카테고리 전체' ? 'text-blue' : 'text-black'
								}`}
								onClick={() => {
									setNowCategory('카테고리 전체');
									onClose();
								}}
							>
								전체
								<Done
									className={`${
										nowCategory === '카테고리 전체' ? 'text-blue' : 'text-black'
									}`}
								/>
							</Typography>
							<Typography
								variant="body1"
								component="div"
								className={`flex justify-between w-1/2 cursor-pointer p-3 hover:bg-lightGray ${
									nowCategory === '호텔' ? 'text-blue' : 'text-black'
								}`}
								onClick={() => {
									setNowCategory('호텔');
									onClose();
								}}
							>
								호텔
								<Done
									className={`${
										nowCategory === '호텔' ? 'text-blue' : 'text-black'
									}`}
								/>
							</Typography>
						</div>
						<div className="flex items-center">
							<Typography
								variant="body1"
								component="div"
								className={`flex justify-between w-1/2 cursor-pointer p-3 hover:bg-lightGray ${
									nowCategory === '리조트' ? 'text-blue' : 'text-black'
								}`}
								onClick={() => {
									setNowCategory('리조트');
									onClose();
								}}
							>
								리조트
								<Done
									className={`${
										nowCategory === '리조트' ? 'text-blue' : 'text-black'
									}`}
								/>
							</Typography>
							<Typography
								variant="body1"
								component="div"
								className={`flex justify-between w-1/2 cursor-pointer p-3 hover:bg-lightGray ${
									nowCategory === '펜션' ? 'text-blue' : 'text-black'
								}`}
								onClick={() => {
									setNowCategory('펜션');
									onClose();
								}}
							>
								펜션
								<Done
									className={`${
										nowCategory === '펜션' ? 'text-blue' : 'text-black'
									}`}
								/>
							</Typography>
						</div>
						<div className="flex items-center pb-5">
							<Typography
								variant="body1"
								component="div"
								className={`flex justify-between w-1/2 cursor-pointer p-3 hover:bg-lightGray ${
									nowCategory === '풀빌라' ? 'text-blue' : 'text-black'
								}`}
								onClick={() => {
									setNowCategory('풀빌라');
									onClose();
								}}
							>
								풀빌라
								<Done
									className={`${
										nowCategory === '풀빌라' ? 'text-blue' : 'text-black'
									}`}
								/>
							</Typography>
						</div>
					</Typography>
				</div>
			</Box>
		</Modal>
	);
};

export default CategoryModal;
