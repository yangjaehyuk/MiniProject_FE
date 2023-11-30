import supertest from 'supertest';

const request = supertest('https://api.hitit7mini.store');
test('POST /api/members/login', async () => {
	const userData = {
		email: 'emailaaaaa@hanmail.net',
		password: 'password1232!',
		name: '마이콜',
	};

	const login = await request // 로그인
		.post('/api/members/login')
		.set('Content-Type', 'application/json')
		.send(userData);
	expect(login.status).toEqual(200); // success
	// expect(response.status).toEqual(400); // duplicated or error
	// console.log(login.body);
	const accessToken = login.body.data.accessToken;

	const getCart = await request // 장바구니 조회
		.get('/api/carts')
		.set('Content-Type', 'application/json')
		.set('Authorization', `Bearer ${accessToken}`);
	expect(getCart.status).toEqual(200); // success
});
