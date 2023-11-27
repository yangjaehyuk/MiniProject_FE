export interface Accommodation {
	id: string;
	name: string;
	address: string;
	image: string;
}

export interface RoomType {
	id: string;
	name: string;
	price: number;
	capacity: string;
}

export interface CartItem {
	accommodation: Accommodation;
	checkinDate: string;
	checkoutDate: string;
	id: string;
	roomType: RoomType;
	stock: string;
}

export type dataCartItem = CartItem & {
	isClicked: boolean;
};
