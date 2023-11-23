import React, { useState, useRef, ChangeEvent, useEffect } from 'react';
import {
	Cancel,
	Visibility,
	VisibilityOff,
	ChevronRight,
} from '@mui/icons-material';
import { Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import SignUpModal from './SignUpModal';
import styles from '../../components/login/Login.module.css';
import { validationLoginSchema } from 'utils/validateSchema';

const Inner = () => {
	const navigate = useNavigate();
	const mailRef = useRef<any>(null);
	const pwRef = useRef<any>(null);
	const [showVis, setShowVis] = useState(false);
	const [pw, setPw] = useState('');
	const [showPw, setShowPw] = useState(false);
	const [mail, setMail] = useState('');
	const [showMail, setShowMail] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const onChangeMail = (event: ChangeEvent<HTMLInputElement>) =>
		setMail(event.target.value);
	const onChangePw = (event: ChangeEvent<HTMLInputElement>) =>
		setPw(event.target.value);
	const handleLoginSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			navigate('/');
		} catch (e: any) {
			console.error(e);
		}
	};
	useEffect(() => {
		if (mail.length > 0) {
			setShowMail(true);
		}
	}, [mail]);

	useEffect(() => {
		if (pw.length > 0) {
			setShowVis(true);
		}
	}, [pw]);

	const cancelCloseHandler = (event: MouseEvent) => {
		if (
			mail &&
			mailRef.current &&
			!mailRef.current.contains(event.target as Node)
		) {
			setShowMail(false);
		}
	};

	const cancelOpenHandler = (event: MouseEvent) => {
		if (
			mail &&
			mailRef.current &&
			mailRef.current.contains(event.target as Node)
		) {
			setShowMail(true);
		}
	};

	const visCloseHandler = (event: MouseEvent) => {
		if (pw && pwRef.current && !pwRef.current.contains(event.target as Node)) {
			setShowVis(false);
		}
	};

	const visOpenHandler = (event: MouseEvent) => {
		if (pw && pwRef.current && pwRef.current.contains(event.target as Node)) {
			setShowVis(true);
		}
	};

	useEffect(() => {
		window.addEventListener('click', cancelCloseHandler);
		window.addEventListener('click', cancelOpenHandler);

		return () => {
			window.removeEventListener('click', cancelCloseHandler);
			window.removeEventListener('click', cancelOpenHandler);
		};
	}, [showMail]);

	useEffect(() => {
		window.addEventListener('click', visCloseHandler);
		window.addEventListener('click', visOpenHandler);
		return () => {
			window.removeEventListener('click', visCloseHandler);
			window.removeEventListener('click', visOpenHandler);
		};
	}, [showVis]);

	const handleOnClose = () => {
		setShowModal(false);
	};

	return (
		<div className="pt-20 min-h-screen m-auto bg-white max-w-[768px] mx-auto">
			<div className="pt-4.5 pl-8 pr-8">
				<form className="m-0 p-0" onSubmit={handleLoginSubmit}>
					<div className="relative">
						<div className="mb-8">
							<div className="pt-11 flex">
								<Input
									type="text"
									variant="standard"
									label="이메일"
									value={mail}
									onChange={onChangeMail}
									crossOrigin={undefined}
									ref={mailRef}
								/>
								{mail && showMail && (
									<Cancel
										className="cursor-pointer right-0 absolute"
										onClick={() => {
											setMail('');
										}}
									></Cancel>
								)}
							</div>
							<div className="pt-11 flex" ref={pwRef}>
								<Input
									type={showPw ? 'text' : 'password'}
									variant="standard"
									label="비밀번호"
									value={pw}
									onChange={onChangePw}
									crossOrigin={undefined}
								/>
								{pw && !showPw && showVis && (
									<Visibility
										className="cursor-pointer right-0 absolute"
										onClick={(e) => {
											e.stopPropagation();
											setShowPw(!showPw);
										}}
									></Visibility>
								)}
								{pw && showPw && showVis && (
									<VisibilityOff
										className="cursor-pointer right-0 absolute"
										onClick={(e) => {
											e.stopPropagation();
											setShowPw(!showPw);
										}}
									></VisibilityOff>
								)}
							</div>
						</div>
					</div>

					{(mail.length === 0 || pw.length === 0) && (
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
							className=" mt-4 pt-3 pb-3 flex items-center justify-center bg-gray cursor-default"
						>
							로그인
						</div>
					)}
					{mail.length > 0 && pw.length > 0 && (
						<button
							type="submit"
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
							className={styles.btnActive}
						>
							로그인
						</button>
					)}
				</form>
				<div
					className="flex justify-center items-center "
					onClick={() => {
						setShowMail(!showModal);
					}}
				>
					<span
						className="text-content cursor-pointer flex justify-center items-center mt-6 w-auto hover:bg-bgGray"
						onClick={() => setShowModal(!showModal)}
					>
						이메일로 회원가입
						<ChevronRight className="flex cursor-pointer m-2 justify-center items-center ml-1"></ChevronRight>
					</span>
				</div>
				<SignUpModal open={showModal} onClose={handleOnClose}></SignUpModal>
			</div>
		</div>
	);
};

export default Inner;
