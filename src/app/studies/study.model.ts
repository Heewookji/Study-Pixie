import { LngLatLike } from 'mapbox-gl';

export class Study {
    constructor(
      public id: string,
      public studyLeaderId: string,
      public title: string,
      public image: string,
      public memberNumber: number,
      public from: Date,
      public to: Date,
      public lngLat: LngLatLike
    ){}
  }
  