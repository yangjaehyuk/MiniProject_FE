import instance from "./axios"

const accommodationAPI = {
    getPlaceDetail(accommodationdId : number) {
        return instance.get(`accommodations/${accommodationdId}`)
    },
    getPlaceDetailRooms(accommodationdId : number, checkIn : string, checkOut : string, capacity:number) {
        return instance.get(`accommodations/${accommodationdId}/roomtypes?from=${checkIn}&to=${checkOut}&capacity=${capacity}`)
    },
    getRoomDetail(roomId : number) {
        return instance.get(`roomtypes/${roomId}`)
    }
}

export default accommodationAPI;