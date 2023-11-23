import React, { useState, useRef, useEffect } from 'react';
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
import { useFormik } from 'formik';

const Inner = () => {
	const navigate = useNavigate();
	const mailRef = useRef<any>(null);
	const pwRef = useRef<any>(null);
	const [showPwVis, setShowPwVis] = useState(false);
	const [showPw, setShowPw] = useState(false);
	const [showMail, setShowMail] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const cancelCloseHandler = (event: MouseEvent) => {
		if (mailRef.current && !mailRef.current.contains(event.target as Node)) {
			setShowMail(false);
		}
	};

	const cancelOpenHandler = (event: MouseEvent) => {
		if (mailRef.current && mailRef.current.contains(event.target as Node)) {
			setShowMail(true);
		}
	};

	const visCloseHandler = (event: MouseEvent) => {
		if (pwRef.current && !pwRef.current.contains(event.target as Node)) {
			setShowPwVis(false);
		}
	};

	const visOpenHandler = (event: MouseEvent) => {
		if (pwRef.current && pwRef.current.contains(event.target as Node)) {
			setShowPwVis(true);
		}
	};

	const formik = useFormik({
		initialValues: {
			mail: '',
			pw: '',
		},
		validationSchema: validationLoginSchema,
		onSubmit: (values) => {
			console.log(values);
			try {
				navigate('/');
			} catch (e) {
				console.error(e);
			}
		},
	});

	const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
		formik;

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
	}, [showPwVis]);

	const handleOnClose = () => {
		setShowModal(false);
	};

	return (
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
						</div>
					</div>
					{!(
						((touched.mail && Boolean(errors.mail) === false) ||
							(touched.mail && Boolean(errors.mail) === undefined)) &&
						((touched.pw && Boolean(errors.pw) === false) ||
							(touched.pw && Boolean(errors.pw) === undefined))
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
							로그인
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
