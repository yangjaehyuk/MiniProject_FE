import instance from "./axios"

const cartAPI = {
    postRoomToCart(roomTypeId : number, checkInDate : string, checkOutDate : string) {
        return instance.post('carts',{
            roomTypeId : roomTypeId,
            checkinDate : checkInDate,
            checkoutDate : checkOutDate
        })
    }
}

export default cartAPI;