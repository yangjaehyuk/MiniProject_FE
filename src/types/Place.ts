export interface PlaceDetail {
    id : number;
    name : string;
    star : number;
    location : {
        address : string;
        latitude : number;
        longitude : number;
    };
    introduction : string;
    services : string[];
    images : string[];

}

export interface RoomDetail {
    id : number;
    name : string;
    price : number;
    capacity : number;
    images : string[];
    stock : number;

}