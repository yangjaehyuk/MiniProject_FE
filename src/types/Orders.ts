export interface OrderItem {
	accommodationName: string;
	roomTypeName: string;
	price: number;
	capacity: number;
	id: number;
}

export type PostOrderItem = {
	roomTypeId: string;
	checkinDate: string;
	checkoutDate: string;
};

export interface PostClient {
	name: string;
	phoneNumber: string;
}

export interface PostSubscriber {
	name: string;
	phoneNumber: string;
}
