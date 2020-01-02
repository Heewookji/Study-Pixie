import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Study } from './study.model';
import { HttpClient } from '@angular/common/http';
import { LngLatLike } from 'mapbox-gl';
import { take, map, delay } from 'rxjs/operators';

interface StudyData {
  id: string,
  studyLeaderId: string,
  name: string,
  image: string,
  memberNumber: number,
  from: string,
  to: string,
  lngLat: LngLatLike
}

@Injectable({
  providedIn: 'root'
})
export class StudyService {
  
  private _studies = new BehaviorSubject<Study[]>([]);
  
  constructor(private http: HttpClient) {}


  get studies() {
    return this._studies.asObservable();
  }
  
  fetchStudiesByLngLat(lngLat: LngLatLike){
    return this.http
    .get<{ [key: string]: StudyData }>(
      `http://127.0.0.1:8080/studyboot/app/json/study/fetchByLngLat?lng=${lngLat[0]}&lat=${lngLat[1]}`
    )
    .pipe(
      take(1),
      map(resData => {
        const studies: Study[] = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            studies.push(
              new Study(
                resData[key].id,
                resData[key].studyLeaderId,
                resData[key].name,
                resData[key].image,
                resData[key].memberNumber,
                new Date(resData[key].from),
                new Date(resData[key].to),
                resData[key].lngLat,
              )
            );
          }
        }
        return studies;
      })
    );
  }

  fetchStudiesByKeyword(keyword: string) {
    return this.http
      .get<{ [key: string]: StudyData }>(
        `http://127.0.0.1:8080/studyboot/app/json/study/fetchByKeyword?keyword=${keyword}`
      )
      .pipe(
        take(1),
        map(resData => {
          const studies: Study[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              studies.push(
                new Study(
                  resData[key].id,
                  resData[key].studyLeaderId,
                  resData[key].name,
                  resData[key].image,
                  resData[key].memberNumber,
                  new Date(resData[key].from),
                  new Date(resData[key].to),
                  resData[key].lngLat,
                )
              );
            }
          }
          return studies;
        })
      );
  }

  fetchStudiesByGrade(grade: number) {
    return this.http
      .get<{ [key: string]: StudyData }>(
        `http://127.0.0.1:8080/studyboot/app/json/study/fetchByGrade?grade=${grade}`
      )
      .pipe(
        take(1),
        map(resData => {
          const studies: Study[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              studies.push(
                new Study(
                  resData[key].id,
                  resData[key].studyLeaderId,
                  resData[key].name,
                  resData[key].image,
                  resData[key].memberNumber,
                  new Date(resData[key].from),
                  new Date(resData[key].to),
                  resData[key].lngLat,
                )
              );
            }
          }
          return studies;
        })
      );
  }



}
