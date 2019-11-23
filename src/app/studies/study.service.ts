import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Study } from './study.model';
import { HttpClient } from '@angular/common/http';
import { LngLatLike } from 'mapbox-gl';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudyService {
  
  private _studies = new BehaviorSubject<Study[]>([]);
  
  constructor(private http: HttpClient) {}

  
  fetchStudiesByLngLat(lngLat: LngLatLike){
    return this.http
      .get(
        `http://127.0.0.1:8080/studyboot/app/json/study/fetchStudies?test=${lngLat.toString}`
      )
      .pipe(take(1));
  }
}
