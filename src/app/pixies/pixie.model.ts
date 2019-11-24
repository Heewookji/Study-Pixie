import { LngLatLike } from 'mapbox-gl';

export class Pixie {
    constructor(
      public id: string,
      public image: string,
      public registered: Date,
      public lngLat: LngLatLike
    ){}
  }
  