import { OrderEnum } from 'recoil/atoms/orderAtom';
import isEnumValue from './isEnumValue';

test('enum에 없는 값을 입력하면 false', () => {
	expect(isEnumValue(OrderEnum, 'star')).toBeFalsy();
});

test('enum에 있는 값을 입력하면 true', () => {
	expect(isEnumValue(OrderEnum, 'STAR_DESC')).toBeTruthy();
});
