import { regionToKor } from './switchNameToKor';

describe('영어 이름이 잘 변경되는지 확인', () => {
	it('서울', async () => {
		expect(regionToKor('SEOUL')).toBe('서울');
	});
	it('빈값일 때', async () => {
		expect(regionToKor('')).not.toBe('서울');
	});
});
