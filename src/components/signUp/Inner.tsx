import React, { useState, useRef, useEffect } from 'react';
import { Cancel, Visibility, VisibilityOff, Block } from '@mui/icons-material';
import { Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { validationSignUpSchema } from 'utils/validateSchema';
import styles from '../../components/login/Login.module.css';
import { postJoin } from 'apis/axios';
import { useRecoilValue } from 'recoil';
import { signUpModalState } from 'recoil/atoms/signUpModalAtom';
import SignUpModal from 'components/login/SignUpModal';

const Inner = () => {
	const navigate = useNavigate();
	const mailRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const pwRef = useRef<HTMLInputElement>(null);
	const checkPwRef = useRef<HTMLInputElement>(null);
	const [showPw, setShowPw] = useState(false);
	const [showCheckPw, setShowCheckPw] = useState(false);
	const [showName, setShowName] = useState(false);
	const [showPwVis, setShowPwVis] = useState(false);
	const [showCheckPwVis, setShowCheckPwVis] = useState(false);
	const [showMail, setShowMail] = useState(false);
	const [showModal, setShowModal] = useState(true);
	const modalCheck = useRecoilValue(signUpModalState);

	const cancelCloseMailHandler = (event: MouseEvent) => {
		if (mailRef.current && !mailRef.current.contains(event.target as Node)) {
			setShowMail(false);
		}
	};

	const cancelOpenMailHandler = (event: MouseEvent) => {
		if (mailRef.current && mailRef.current.contains(event.target as Node)) {
			setShowMail(true);
		}
	};

	const cancelCloseNameHandler = (event: MouseEvent) => {
		if (nameRef.current && !nameRef.current.contains(event.target as Node)) {
			setShowName(false);
		}
	};

	const cancelOpenNameHandler = (event: MouseEvent) => {
		if (nameRef.current && nameRef.current.contains(event.target as Node)) {
			setShowName(true);
		}
	};

	const visClosePwHandler = (event: MouseEvent) => {
		if (pwRef.current && !pwRef.current.contains(event.target as Node)) {
			setShowPwVis(false);
		}
	};

	const visOpenPwHandler = (event: MouseEvent) => {
		if (pwRef.current && pwRef.current.contains(event.target as Node)) {
			setShowPwVis(true);
		}
	};

	const visCloseCheckPwHandler = (event: MouseEvent) => {
		if (
			checkPwRef.current &&
			!checkPwRef.current.contains(event.target as Node)
		) {
			setShowCheckPwVis(false);
		}
	};

	const visOpenCheckPwHandler = (event: MouseEvent) => {
		if (
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

	const formik = useFormik({
		initialValues: {
			mail: '',
			name: '',
			pw: '',
			checkPw: '',
		},
		validationSchema: validationSignUpSchema,
		onSubmit: async (values) => {
			try {
				await postJoin(values.mail, values.pw, values.name);
				// console.log('회원가입 성공', res);
				navigate('/login');
			} catch (e) {
				console.error(e);
			}
		},
	});

	const handleOnClose = () => {
		setShowModal(false);
	};

	const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
		formik;

	return (
		<>
			{modalCheck === false && (
				<SignUpModal open={showModal} onClose={handleOnClose}></SignUpModal>
			)}
			<div className="pt-20 min-h-screen m-auto bg-white max-w-[768px] mx-auto">
				<div className="pt-4.5 pl-8 pr-8">
					<form className="m-0 p-0" onSubmit={handleSubmit}>
						<div className="relative">
							<div className="mb-8">
								<div className="pt-11 flex">
									<Input
										type="text"
										variant="standard"
										label="이메일"
										name="mail"
										value={values.mail}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.mail && Boolean(errors.mail)}
										ref={mailRef}
										crossOrigin={undefined}
										className={`${
											values.mail.length > 0 && errors.mail
												? 'text-red border-b-1 border-red'
												: 'text-green border-b-1 border-green'
										}`}
									/>
									{values.mail && showMail && (
										<Cancel
											className="cursor-pointer right-0 absolute"
											onClick={() => {
												formik.setFieldValue('mail', '');
											}}
										></Cancel>
									)}
								</div>
								{values.mail.length > 0 && errors.mail && (
									<div className="text-sm text-red flex items-center">
										<Block className="pr-1" />
										{errors.mail}
									</div>
								)}
								<div className="pt-11 flex">
									<Input
										type="text"
										variant="standard"
										label="이름"
										name="name"
										value={values.name}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.name && Boolean(errors.name)}
										ref={nameRef}
										crossOrigin={undefined}
										className={`${
											values.name.length > 0 && errors.name
												? 'text-red border-b-1 border-red'
												: 'text-green border-b-1 border-green'
										}`}
									/>
									{values.name && showName && (
										<Cancel
											className="cursor-pointer right-0 absolute"
											onClick={() => {
												formik.setFieldValue('name', '');
											}}
										></Cancel>
									)}
								</div>
								{values.name.length > 0 && errors.name && (
									<div className="text-sm text-red flex items-center">
										<Block className="pr-1" />
										{errors.name}
									</div>
								)}
								<div className="pt-11 flex" ref={pwRef}>
									<Input
										type={showPw ? 'text' : 'password'}
										variant="standard"
										label="비밀번호"
										name="pw"
										value={values.pw}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.pw && Boolean(errors.pw)}
										crossOrigin={undefined}
										className={`${
											values.pw.length > 0 && errors.pw
												? 'text-red border-b-1 border-red'
												: 'text-green border-b-1 border-green'
										}`}
									/>
									{values.pw && !showPw && showPwVis && (
										<Visibility
											className="cursor-pointer right-0 absolute"
											onClick={(e) => {
												e.stopPropagation();
												setShowPw(!showPw);
											}}
										></Visibility>
									)}
									{values.pw && showPw && showPwVis && (
										<VisibilityOff
											className="cursor-pointer right-0 absolute"
											onClick={(e) => {
												e.stopPropagation();
												setShowPw(!showPw);
											}}
										></VisibilityOff>
									)}
								</div>
								{values.pw.length > 0 && errors.pw && (
									<div className="text-sm text-red flex items-center">
										<Block className="pr-1" />
										{errors.pw}
									</div>
								)}
								<div className="pt-11 flex" ref={checkPwRef}>
									<Input
										type={showCheckPw ? 'text' : 'password'}
										variant="standard"
										label="비밀번호 확인"
										name="checkPw"
										value={values.checkPw}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.checkPw && Boolean(errors.checkPw)}
										crossOrigin={undefined}
										className={`${
											values.checkPw.length > 0 && errors.checkPw
												? 'text-red border-b-1 border-red'
												: 'text-green border-b-1 border-green'
										}`}
									/>

									{values.checkPw && !showCheckPw && showCheckPwVis && (
										<Visibility
											className="cursor-pointer right-0 absolute"
											onClick={(e) => {
												e.stopPropagation();
												setShowCheckPw(!showCheckPw);
											}}
										></Visibility>
									)}
									{values.checkPw && showCheckPw && showCheckPwVis && (
										<VisibilityOff
											className="cursor-pointer right-0 absolute"
											onClick={(e) => {
												e.stopPropagation();
												setShowCheckPw(!showCheckPw);
											}}
										></VisibilityOff>
									)}
								</div>
								{values.checkPw.length > 0 && errors.checkPw && (
									<div className="text-sm text-red flex items-center">
										<Block className="pr-1" />
										{errors.checkPw}
									</div>
								)}
							</div>
						</div>

						{!(
							((touched.mail && Boolean(errors.mail) === false) ||
								(touched.mail && Boolean(errors.mail) === undefined)) &&
							((touched.name && Boolean(errors.name) === false) ||
								(touched.name && Boolean(errors.name) === undefined)) &&
							((touched.pw && Boolean(errors.pw) === false) ||
								(touched.pw && Boolean(errors.pw) === undefined)) &&
							((touched.checkPw && Boolean(errors.checkPw) === false) ||
								(touched.checkPw && Boolean(errors.checkPw) === undefined))
						) ? (
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
								완료
							</div>
						) : (
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
		</>
	);
};

export default Inner;
