import { LngLatLike } from 'mapbox-gl';

export class study {
    constructor(
      public id: string,
      public StudyLeaderId: string,
      public Title: string,
      public Image: string,
      public memberNumber: number,
      public From: Date,
      public To: Date,
      public lngLat: LngLatLike
    ){}
  }
  