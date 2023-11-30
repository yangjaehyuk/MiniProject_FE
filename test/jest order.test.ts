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
	const accessToken = login.body.data.accessToken; // 여기서 나온 토큰으로 밑에서 Authorization으로 토큰 값 넣는 요청 처리하시면 됩니다.

	const orderData = {
		client: {
			name: '샌디',
			phoneNumber: '010-1234-1234',
		},
		subscriber: {
			name: '마이콜',
			phoneNumber: '010-123-1234',
		},
		paymentMethod: 'NAVER_PAY',
		orderItems: [
			{
				roomTypeId: 4,
				checkinDate: ' 2023-12-10',
				checkoutDate: '2023-12-14',
			},
		],
	};

	const postOrder = await request // 주문
		.post('/api/orders')
		.set('Content-Type', 'application/json')
		.set('Authorization', `Bearer ${accessToken}`)
		.send(orderData);
	expect(postOrder.status).toEqual(201); // success
});
