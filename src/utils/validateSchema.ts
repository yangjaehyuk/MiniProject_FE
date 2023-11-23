import * as yup from 'yup';

export const validationLoginSchema = yup.object({
	email: yup
		.string()
		.email('잘못된 이메일 형식입니다.')
		.required('이메일은 필수 입니다.'),
	name: yup
		.string()
		.max(20, '이름은 최대 20자 까지 가능합니다.')
		.required('이름은 필수 입니다.'),
	password: yup
		.string()
		.min(5, '비밀번호는 최소 5자 이상으로 입력해야 합니다.')
		.required('비밀번호는 필수 입니다.'),
});

export const validationSignUpSchema = yup.object({
	email: yup
		.string()
		.email('잘못된 이메일 형식입니다.')
		.required('이메일은 필수 입니다.'),
	name: yup
		.string()
		.max(20, '이름은 최대 20자 까지 가능합니다.')
		.required('이름은 필수 입니다.'),
	password: yup
		.string()
		.min(5, '비밀번호는 최소 5자 이상으로 입력해야 합니다.')
		.required('비밀번호는 필수 입니다.'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
		.required('비밀번호는 필수 입니다.'),
});
