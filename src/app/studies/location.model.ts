export interface Coordinates {
    lat: number,
    lng: number
}

export interface StudyLocation extends Coordinates{
    staticMapImageUrl: string
}