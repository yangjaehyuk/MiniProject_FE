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

//  주문 조회
export interface OrderItems {
	id: number;
	code: string;
	accommodation: {
		id: number;
		name: string;
		image: string;
	};
	roomType: {
		id: number;
		name: string;
		capacity: number;
	};
	checkinDate: string;
	checkoutDate: string;
}

export interface ClientInfo {
	name: string;
	phoneNumber: string;
}

export interface ReservationInfo {
	code: string;
	paymentMethod: string;
}

export interface OrderData {
	id: number;
	orderTime: string;
	subscriber: ClientInfo;
	client: ClientInfo;
	reservationInfo: ReservationInfo;
	totalPrice: number;
	orderItems: OrderItems[];
}
