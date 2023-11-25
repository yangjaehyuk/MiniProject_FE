import { atom } from "recoil";

export const checkInDateState = atom({
    key : 'checkInDateState',
    default : new Date(),
});

export const checkOutDateState = atom({
    key : 'checkOutDateState',
    default: (() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    })(),
});