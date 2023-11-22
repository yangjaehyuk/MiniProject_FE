import React, { useState, useRef, ChangeEvent, useEffect } from 'react';
import { Cancel, Visibility, VisibilityOff } from '@mui/icons-material';
import { Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import styles from '../../components/login/Login.module.css';

const Inner = () => {
	const navigate = useNavigate();
	const mailRef = useRef<any>(null);
	const nameRef = useRef<any>(null);
	const pwRef = useRef<any>(null);
	const checkPwRef = useRef<any>(null);
	const [showPwVis, setShowPwVis] = useState(false);
	const [showCheckPwVis, setShowCheckPwVis] = useState(false);
	const [pw, setPw] = useState('');
	const [showPw, setShowPw] = useState(false);
	const [checkPw, setCheckPw] = useState('');
	const [showCheckPw, setShowCheckPw] = useState(false);
	const [mail, setMail] = useState('');
	const [showMail, setShowMail] = useState(false);
	const [name, setName] = useState('');
	const [showName, setShowName] = useState(false);
	const [passwordsMatch, setPasswordsMatch] = useState(false);
	const onChangeMail = (event: ChangeEvent<HTMLInputElement>) =>
		setMail(event.target.value);
	const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};
	const onChangePw = (event: ChangeEvent<HTMLInputElement>) =>
		setPw(event.target.value);
	const onChangeCheckPw = (event: ChangeEvent<HTMLInputElement>) => {
		setCheckPw(event.target.value);
	};

	const handleSignUpSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			navigate('/login');
		} catch (e: any) {
			console.error(e);
		}
	};

	useEffect(() => {
		if (pw === checkPw) {
			setPasswordsMatch(true);
		} else setPasswordsMatch(false);
	}, [pw, checkPw]);

	useEffect(() => {
		if (mail.length > 0) {
			setShowMail(true);
		}
	}, [mail]);

	useEffect(() => {
		if (name.length > 0) {
			setShowName(true);
		}
	}, [name]);

	useEffect(() => {
		if (pw.length > 0) {
			setShowPwVis(true);
		}
	}, [pw]);

	useEffect(() => {
		if (checkPw.length > 0) {
			setShowCheckPwVis(true);
		}
	}, [checkPw]);

	const cancelCloseMailHandler = (event: MouseEvent) => {
		if (
			mail &&
			mailRef.current &&
			!mailRef.current.contains(event.target as Node)
		) {
			setShowMail(false);
		}
	};

	const cancelOpenMailHandler = (event: MouseEvent) => {
		if (
			mail &&
			mailRef.current &&
			mailRef.current.contains(event.target as Node)
		) {
			setShowMail(true);
		}
	};

	const cancelCloseNameHandler = (event: MouseEvent) => {
		if (
			name &&
			nameRef.current &&
			!nameRef.current.contains(event.target as Node)
		) {
			setShowName(false);
		}
	};

	const cancelOpenNameHandler = (event: MouseEvent) => {
		if (
			name &&
			nameRef.current &&
			nameRef.current.contains(event.target as Node)
		) {
			setShowName(true);
		}
	};

	const visClosePwHandler = (event: MouseEvent) => {
		if (pw && pwRef.current && !pwRef.current.contains(event.target as Node)) {
			setShowPwVis(false);
		}
	};

	const visOpenPwHandler = (event: MouseEvent) => {
		if (pw && pwRef.current && pwRef.current.contains(event.target as Node)) {
			setShowPwVis(true);
		}
	};

	const visCloseCheckPwHandler = (event: MouseEvent) => {
		if (
			checkPw &&
			checkPwRef.current &&
			!checkPwRef.current.contains(event.target as Node)
		) {
			setShowCheckPwVis(false);
		}
	};

	const visOpenCheckPwHandler = (event: MouseEvent) => {
		if (
			checkPw &&
			checkPwRef.current &&
			checkPwRef.current.contains(event.target as Node)
		) {
			setShowCheckPwVis(true);
		}
	};

	useEffect(() => {
		window.addEventListener('click', cancelCloseMailHandler);
		window.addEventListener('click', cancelOpenMailHandler);

		return () => {
			window.removeEventListener('click', cancelCloseMailHandler);
			window.removeEventListener('click', cancelOpenMailHandler);
		};
	}, [showMail]);

	useEffect(() => {
		window.addEventListener('click', cancelCloseNameHandler);
		window.addEventListener('click', cancelOpenNameHandler);

		return () => {
			window.removeEventListener('click', cancelCloseNameHandler);
			window.removeEventListener('click', cancelOpenNameHandler);
		};
	}, [showName]);

	useEffect(() => {
		window.addEventListener('click', visClosePwHandler);
		window.addEventListener('click', visOpenPwHandler);
		return () => {
			window.removeEventListener('click', visClosePwHandler);
			window.removeEventListener('click', visOpenPwHandler);
		};
	}, [showPwVis]);

	useEffect(() => {
		window.addEventListener('click', visCloseCheckPwHandler);
		window.addEventListener('click', visOpenCheckPwHandler);
		return () => {
			window.removeEventListener('click', visCloseCheckPwHandler);
			window.removeEventListener('click', visOpenCheckPwHandler);
		};
	}, [showCheckPwVis]);

	return (
		<div className="pt-20 min-h-screen m-auto bg-white max-w-[768px] mx-auto">
			<div className="pt-4.5 pl-8 pr-8">
				<form className="m-0 p-0" onSubmit={handleSignUpSubmit}>
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
							<div className="pt-11 flex">
								<Input
									type="text"
									variant="standard"
									label="이름"
									value={name}
									onChange={onChangeName}
									crossOrigin={undefined}
									ref={nameRef}
								/>
								{name && showName && (
									<Cancel
										className="cursor-pointer right-0 absolute"
										onClick={() => {
											setName('');
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
								{pw && !showPw && showPwVis && (
									<Visibility
										className="cursor-pointer right-0 absolute"
										onClick={(e) => {
											e.stopPropagation();
											setShowPw(!showPw);
										}}
									></Visibility>
								)}
								{pw && showPw && showPwVis && (
									<VisibilityOff
										className="cursor-pointer right-0 absolute"
										onClick={(e) => {
											e.stopPropagation();
											setShowPw(!showPw);
										}}
									></VisibilityOff>
								)}
							</div>
							<div className="pt-11 flex" ref={checkPwRef}>
								<Input
									type={showCheckPw ? 'text' : 'password'}
									variant="standard"
									label={`비밀번호 확인${
										pw.length > 0
											? checkPw.length > 0
												? !passwordsMatch
													? ' - 비밀번호가 다릅니다'
													: ' - 비밀번호가 일치합니다'
												: ''
											: ''
									}`}
									value={checkPw}
									onChange={onChangeCheckPw}
									crossOrigin={undefined}
								/>

								{checkPw && !showCheckPw && showCheckPwVis && (
									<Visibility
										className="cursor-pointer right-0 absolute"
										onClick={(e) => {
											e.stopPropagation();
											setShowCheckPw(!showCheckPw);
										}}
									></Visibility>
								)}
								{checkPw && showCheckPw && showCheckPwVis && (
									<VisibilityOff
										className="cursor-pointer right-0 absolute"
										onClick={(e) => {
											e.stopPropagation();
											setShowCheckPw(!showCheckPw);
										}}
									></VisibilityOff>
								)}
							</div>
						</div>
					</div>

					{(mail.length === 0 ||
						pw.length === 0 ||
						name.length === 0 ||
						passwordsMatch === false) && (
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
							완료
						</div>
					)}
					{mail.length > 0 &&
						pw.length > 0 &&
						name.length > 0 &&
						passwordsMatch === true && (
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
								완료
							</button>
						)}
				</form>
			</div>
		</div>
	);
};

export default Inner;
