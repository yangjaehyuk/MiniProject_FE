export interface Accommodation {
	id: number;
	name: string;
	address: string;
	image: string;
}

export interface RoomType {
	id: number;
	name: string;
	price: number;
	capacity: number;
}

export interface CartItem {
	accommodation: Accommodation;
	checkinDate: string;
	checkoutDate: string;
	id: number;
	roomType: RoomType;
	stock: number;
}
