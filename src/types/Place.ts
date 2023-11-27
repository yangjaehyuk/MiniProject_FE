export interface PlaceDetailInfo {
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

export interface RoomDetailInfos {
    id : number;
    name : string;
    price : number;
    capacity : number;
    images : string[];
    stock : number;
    status : string;

}

export interface RoomDetailInfo {
    id : number;
    name : string;
    price : number;
    capacity : number;
    introduction : string;
    services : string[];
    images : string[];
}

export interface RoomProps {
    roomItem : RoomDetailInfos;
    name : string | undefined;
}