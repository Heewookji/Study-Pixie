import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Pixie } from "./pixie.model";
import { LngLatLike } from "mapbox-gl";
import { take, map } from "rxjs/operators";

interface PixieData {
  id: string;
  image: string;
  registered: string;
  lngLat: LngLatLike;
}

@Injectable({
  providedIn: "root"
})
export class PixieService {
  private _pixies = new BehaviorSubject<Pixie[]>([]);

  constructor(private http: HttpClient) {}

  get pixies() {
    return this._pixies.asObservable();
  }
  fetchPixiesByLngLat(lngLat: LngLatLike) {
    return this.http
      .get<{ [key: string]: PixieData }>(
        `http://127.0.0.1:8080/studyboot/app/json/pixie/fetchByLngLat?lng=${lngLat[0]}&lat=${lngLat[1]}`
      )
      .pipe(
        take(1),
        map(resData => {
          const pixies: Pixie[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              pixies.push(
                new Pixie(
                  resData[key].id,
                  resData[key].image,
                  new Date(resData[key].registered),
                  resData[key].lngLat
                )
              );
            }
          }
          return pixies;
        })
      );
  }

  fetchPixiesByKeyword(keyword: string) {
    return this.http
      .get<{ [key: string]: PixieData }>(
        `http://127.0.0.1:8080/studyboot/app/json/pixie/fetch?keyword=${keyword}`
      )
      .pipe(
        take(1),
        map(resData => {
          const pixies: Pixie[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              pixies.push(
                new Pixie(
                  resData[key].id,
                  resData[key].image,
                  new Date(resData[key].registered),
                  resData[key].lngLat
                )
              );
            }
          }
          return pixies;
        })
      );
  }

  fetchPixiesByGrade(grade: number) {
    return this.http
      .get<{ [key: string]: PixieData }>(
        `http://127.0.0.1:8080/studyboot/app/json/pixie/fetchByGrade?grade=${grade}`
      )
      .pipe(
        take(1),
        map(resData => {
          const pixies: Pixie[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              pixies.push(
                new Pixie(
                  resData[key].id,
                  resData[key].image,
                  new Date(resData[key].registered),
                  resData[key].lngLat
                )
              );
            }
          }
          return pixies;
        })
      );
  }
}
