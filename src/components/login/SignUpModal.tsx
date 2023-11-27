import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Close } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { signUpModalState } from 'recoil/atoms/signUpModalAtom';

const SignUpModal = ({ open, onClose }: any) => {
	const navigate = useNavigate();
	const [allChecked, setAllChecked] = useState(false);
	const [essentialChecked, setEssentialChecked] = useState(false);
	const [optionalChecked1, setOptionalChecked1] = useState(false);
	const [optionalChecked2, setOptionalChecked2] = useState(false);
	const [optionalChecked3, setOptionalChecked3] = useState(false);
	const [now, setNow] = useState<string | undefined>(undefined);
	const [modalCheck, setModalCheck] = useRecoilState(signUpModalState);
	useEffect(() => {
		const url = window.location.href;
		const lastSegment = url.split('/').pop();
		setNow(lastSegment);
	}, []);

	useEffect(() => {
		const allOthersChecked =
			essentialChecked &&
			optionalChecked1 &&
			optionalChecked2 &&
			optionalChecked3;

		setAllChecked(allOthersChecked);
	}, [essentialChecked, optionalChecked1, optionalChecked2, optionalChecked3]);

	const handleAllCheckboxChange = () => {
		const newCheckedStatus = !allChecked;
		setAllChecked(newCheckedStatus);
		setEssentialChecked(newCheckedStatus);
		setOptionalChecked1(newCheckedStatus);
		setOptionalChecked2(newCheckedStatus);
		setOptionalChecked3(newCheckedStatus);
	};

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
						<div className="font-bold text-title">약관 동의</div>
					</Typography>
					<div className="m-2"></div>
				</div>
				<div className="pt-3 pb-3 pr-32 pl-32">
					<label className="flex items-start border border-solid border-gray p-2 bg-white hover:brightness-95 cursor-pointer rounded">
						<input
							type="checkbox"
							className="w-5 h-5 cursor-pointer"
							id="allCheckBox"
							checked={allChecked}
							onChange={handleAllCheckboxChange}
						/>
						<div className="ml-1 text-content font-bold">전체 동의</div>
						<div className="ml-1 text-sm">(선택포함)</div>
					</label>
					<label className="flex items-start mt-5 cursor-pointer">
						<input
							type="checkbox"
							className="cursor-pointer"
							id="essentialCheckBox"
							checked={essentialChecked}
							onChange={() => setEssentialChecked(!essentialChecked)}
						/>
						<div className="ml-1 text-content">
							만 14세 이상 이용, 서비스 이용약관, 개인정보 수집 및 동의 (필수)
						</div>
					</label>
					<label className="flex items-start mt-5 cursor-pointer">
						<input
							type="checkbox"
							className="cursor-pointer"
							id="optionalCheckBox1"
							checked={optionalChecked1}
							onChange={() => setOptionalChecked1(!optionalChecked1)}
						/>
						<div className="ml-1 text-content">
							개인정보 수집 및 이용 동의 (선택)
						</div>
					</label>
					<label className="flex items-start mt-5 cursor-pointer">
						<input
							type="checkbox"
							className="cursor-pointer"
							id="optionalCheckBox2"
							checked={optionalChecked2}
							onChange={() => setOptionalChecked2(!optionalChecked2)}
						/>
						<div className="ml-1 text-content">
							숙소 특가, 쿠폰 등 마케팅 수신 동의 (선택)
							<div className="text-sm text-gray">
								마케팅 정보는 문자, E-mail로 받을 수 있으며 동의 여부는 내정보
								관리에서 확인 가능합니다.
							</div>
						</div>
					</label>
					<label className="flex items-start mt-5 cursor-pointer">
						<input
							type="checkbox"
							className="cursor-pointer"
							id="optionalCheckBox3"
							checked={optionalChecked3}
							onChange={() => setOptionalChecked3(!optionalChecked3)}
						/>
						<div className="ml-1 text-content">
							위치 정보 이용 약관 동의 (선택)
						</div>
					</label>
				</div>
				<div className="p-3">
					{essentialChecked ? (
						<button
							onClick={() => {
								setModalCheck(true);
								if (now !== 'signup') navigate('/signup');
							}}
							style={{
								width: '100%',
								boxShadow: 'none',
								fontFamily: 'AppleSDGothicNeoL',
								color: 'white',
								fontWeight: 700,
								fontSize: '18px',
								border: '1px solid #de2e5f',
								borderRadius: '5px',
							}}
							className="mt-4 pt-3 pb-3 flex items-center justify-center bg-secondary hover:bg-hoverSecondary"
						>
							동의하고 계속하기
						</button>
					) : (
						<div
							style={{
								width: '100%',
								boxShadow: 'none',
								fontFamily: 'AppleSDGothicNeoL',
								color: 'white',
								fontWeight: 700,
								fontSize: '18px',
								border: '1px solid #ccc',
								borderRadius: '5px',
							}}
							className="mt-4 pt-3 pb-3 flex items-center justify-center bg-gray cursor-default"
						>
							동의하고 계속하기
						</div>
					)}
				</div>
			</Box>
		</Modal>
	);
};

export default SignUpModal;
