import * as yup from 'yup';

export const validationLoginSchema = yup.object({
	mail: yup
		.string()
		.matches(/^[^@\s]+@[^\s]+\.[^@\s]+$/, '잘못된 이메일 형식입니다.')
		.required('이메일은 필수 입니다.'),

	pw: yup
		.string()
		.matches(
			/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,20}$/,
			'최소 한 개이상의 숫자, 특수문자, 영문자 및 8자 이상 20자 이하로 입력해주세요.',
		)
		.required('비밀번호는 필수 입니다.'),
});

export const validationSignUpSchema = yup.object({
	mail: yup
		.string()
		.matches(/^[^@\s]+@[^\s]+\.[^@\s]+$/, '잘못된 이메일 형식입니다.')
		.required('이메일은 필수 입니다.'),
	name: yup
		.string()
		.matches(
			/^[a-zA-Z가-힣]{2,16}$/,
			'영문자 및 한글로 2자 이상 16자 이하로 입력해주세요.',
		)
		.required('이름은 필수 입니다.'),
	pw: yup
		.string()
		.matches(
			/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,20}$/,
			'최소 한 개이상의 숫자, 특수문자, 영문자 및 8자 이상 20자 이하로 입력해주세요.',
		)
		.required('비밀번호는 필수 입니다.'),
	checkPw: yup
		.string()
		.oneOf([yup.ref('pw')], '비밀번호가 일치하지 않습니다.')
		.required('비밀번호는 필수 입니다.'),
});
