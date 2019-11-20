import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LngLatLike } from 'mapbox-gl';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { study } from 'src/app/studies/study.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private _studies = new BehaviorSubject<study[]>([]);
  
  constructor(private http: HttpClient) {}

  
  fetchStudiesByLngLat(lngLat: LngLatLike){
    return this.http
      .get(
        `http://127.0.0.1:8080/studyboot/app/json/study/fetchStudies?test=${lngLat.toString}`
      )
      .pipe(take(1));
  }

}
