import { atom } from "recoil";

export const startDateState = atom({
    key : 'startDateState',
    default : new Date(),
});

export const endDateState = atom({
    key : 'endDateState',
    default: (() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    })(),
});