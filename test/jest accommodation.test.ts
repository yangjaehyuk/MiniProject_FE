import supertest from "supertest";
const request = supertest('https://api.hitit7mini.store');

test('GET /api/accommodations/2', async () => {

    const getAccommodationInfo = await request //숙소 단일 조회
        .get('/api/accommodations/1')
        .set('Content-Type', 'application/json')

    expect(getAccommodationInfo.status).toEqual(200);

    const getAccommodationRoomInfo = await request //숙소 단일 조회
        .get('/api/accommodations/4/roomtypes?from=2023-12-15&to=2023-12-31&capacity=3')
        .set('Content-Type', 'application/json')

    expect(getAccommodationRoomInfo.status).toEqual(200);


})