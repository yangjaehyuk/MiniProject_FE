import * as yup from 'yup';

export const validationSchema = yup.object({
	id: yup
		.string()
		.matches(/^[a-zA-Z0-9]*$/, '영문 + 숫자로만 가능합니다.')
		.required('아이디는 필수 입니다.'),
	name: yup
		.string()
		.max(20, '이름은 최대 20자 까지 가능합니다.')
		.required('이름은 필수 입니다.'),
	password: yup
		.string()
		.min(5, '5글자 이상 .')
		.required('비밀번호는 필수 입니다.'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
		.required('비밀번호는 필수 입니다.'),
});
