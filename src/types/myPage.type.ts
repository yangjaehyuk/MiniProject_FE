export interface myOrder {
	success: boolean;
	data: Order[];
	error: any;
}

export interface Order {
	id: number;
	orderDate: string;
	orderItems: OrderItem[];
}

export interface OrderItem {
	id: number;
	code: string;
	accommodation: Accommodation;
	roomType: RoomType;
	checkinDate: string;
	checkoutDate: string;
	isUsed: boolean;
}

export interface Accommodation {
	id: number;
	type: string;
	name: string;
	image: string;
}

export interface RoomType {
	id: number;
	name: string;
	capacity: number;
}
