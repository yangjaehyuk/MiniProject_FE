import supertest from 'supertest';
const request = supertest('https://api.hitit7mini.store');

test('POST /api/members/signup', async () => {
	const userData = {
		email: 'emailaaaaa@hanmail.net',
		password: 'password1232!',
		name: '마이콜',
	};

	const signUp = await request // 회원가입
		.post('/api/members/signup')
		.set('Content-Type', 'application/json')
		.send(userData);

	expect(signUp.status).toEqual(201); // success
	// expect(signUp.status).toEqual(400); // duplicated or error
});
