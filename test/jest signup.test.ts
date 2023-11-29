import supertest from 'supertest';
const request = supertest('https://api.hitit7mini.store');

test('POST /api/members/signup', async () => {
	const userData = {
		email: 'emailaaa@hanmail.net',
		password: 'password123!',
		name: '마이콜',
	};

	const response = await request
		.post('/api/members/signup')
		.set('Content-Type', 'application/json')
		.send(userData);

	expect(response.status).toEqual(201); // success
	// expect(response.status).toEqual(400); // duplicated or error
});
