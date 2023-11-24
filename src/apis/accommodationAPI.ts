import instance from "./axios"

const accommodationAPI = {
    getPlaceDetail(placeId : number) {
        return instance.get(`accommodations/${placeId}`)
    },
    getPlaceDetailRooms(placeId : number, checkIn : string, checkOut : string) {
        return instance.get(`accommodations/${placeId}/roomtypes?from=${checkIn}&to=${checkOut}`)
    },
    getRoomDetail(roomId : number) {
        return instance.get(`roomtypes/${roomId}`)
    }
}

export default accommodationAPI;