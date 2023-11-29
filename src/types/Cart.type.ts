export interface Accommodation {
	id: string;
	name: string;
	address: string;
	image: string;
}

export interface RoomType {
	id: string;
	name: string;

	capacity: string;
}

export interface CartItem {
	accommodation: Accommodation;
	checkinDate: string;
	checkoutDate: string;
	id: string;
	roomType: RoomType;
	stock: string;
	price: number;
}

export type dataCartItem = CartItem & {
	isClicked: boolean;
};

type CartResponseData = {
	cartItems: CartItem[];
	totalPrice: number;
};

export type CartResponse = {
	success: boolean;
	data: CartResponseData | null;
	error: null;
};
