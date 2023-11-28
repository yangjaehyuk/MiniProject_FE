import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const dateState = atom({
	key: 'dateState',
	default: '최근 3개월',
	effects_UNSTABLE: [persistAtom],
});
