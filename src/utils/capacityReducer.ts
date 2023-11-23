import { CapacityAction } from 'types/Region.type';

export const capaReducer = (
	state: number,
	action: { type: CapacityAction },
): number => {
	switch (action.type) {
		case CapacityAction.COUNT_UP:
			return state >= 4 ? state : state + 1;
		case CapacityAction.COUNT_DOWN:
			return state <= 2 ? state : state - 1;
		default:
			throw new Error();
	}
};
