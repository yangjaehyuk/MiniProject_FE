export const type = 'type';

export type ReservationInfo = {
	reservationName: string;
	reservationNumber: string;
	userName: string;
	userNumber: string;
	paymentMethod: string;
	requiredCheckbox1: boolean;
	requiredCheckbox2: boolean;
	requiredCheckbox3: boolean;
	optionalCheckbox1?: boolean;
	optionalCheckbox2?: boolean;
	allAgreementCheckbox: boolean;
};
