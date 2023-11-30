import supertest from 'supertest';
const request = supertest('https://api.hitit7mini.store');

describe('GET /api/accommodations', ()=>{
  it('accommodations 응답값 변경 있는지 테스트', async () => {

    const res = await request // HOTEL 카테고리 검색
      .get('/api/accommodations?type=HOTEL')
      .set('Content-Type', 'application/json')
  
    expect(res.status).toEqual(200); // success
    expect(res.body.success).toEqual(true); // success
    // 원하는 바디값을 확인합니다.
    expect(res.body.data).toHaveProperty('accommodations');
    // expect(res.status).toEqual(400); // duplicated or error
  });

  it('accommodations 사이즈 확인', async () => {
    const res = await request // HOTEL 카테고리 검색
      .get('/api/accommodations?type=HOTEL&order=STAR_DESC&size=4')
      .set('Content-Type', 'application/json')
  
    expect(res.status).toEqual(200); // success
    expect(res.body.success).toEqual(true); // success
    // 요청한 갯수만큼 오는지 확인
    expect(res.body.data.accommodations.length).toEqual(4);
    // expect(res.status).toEqual(400); // duplicated or error
  });
});