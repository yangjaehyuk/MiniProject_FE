import supertest from "supertest";
const request = supertest('https://api.hitit7mini.store');

test('GET /api/roomtypes/2', async () => {

    const getRoomtypeInfo = await request
        .get('/api/roomtypes/2')
        .set('Content-Type', 'application/json')

    expect(getRoomtypeInfo.status).toEqual(200);
})