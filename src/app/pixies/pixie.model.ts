import { LngLatLike } from 'mapbox-gl';

export class Pixie {
    constructor(
      public id: string,
      public Image: string,
      public registered: Date,
      public lngLat: LngLatLike
    ){}
  }
  