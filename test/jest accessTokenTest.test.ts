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
	const accessToken = login.body.data.accessToken; // 여기서 나온 토큰으로 밑에서 Authorization으로 토큰 값 넣는 요청 처리하시면 됩니다.

	const getUserInfo = await request // 회원 정보 조회
		.get('/api/members/mypage')
		.set('Content-Type', 'application/json')
		.set('Authorization', `Bearer ${accessToken}`);
	expect(getUserInfo.status).toEqual(200); // success

	const getUserOrderInfo = await request // 회원 주문 내역 조회
		.get('/api/members/orders')
		.set('Content-Type', 'application/json')
		.set('Authorization', `Bearer ${accessToken}`);
	expect(getUserOrderInfo.status).toEqual(200); // success
});
