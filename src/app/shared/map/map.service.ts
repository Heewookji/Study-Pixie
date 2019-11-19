import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LngLatLike } from 'mapbox-gl';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  constructor(private http: HttpClient) {}

  
  fetchMarkersByLngLat(lngLat: LngLatLike){
    return this.http
      .get(
        `http://127.0.0.1:8080/studyboot/app/json/map/fetch?test=${lngLat}`
      )
      .pipe(take(1));
  }

}
