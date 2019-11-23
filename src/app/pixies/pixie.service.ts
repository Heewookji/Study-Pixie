import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Pixie } from "./pixie.model";
import { LngLatLike } from "mapbox-gl";
import { take, map, delay } from "rxjs/operators";

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
    // return this.http
    //   .get(
    //     `http://127.0.0.1:8080/studyboot/app/json/pixie/fetch?lngLat=${lngLat.toString}`
    //   )
    //   .pipe(
    //     take(1),
    //     map(res => {
    //       const pixies: Pixie[] = [];
    //       for (const key in res) {
    //         pixies.push(new Pixie("1", "2", new Date(), [1, 2]));
    //       }
    //       return pixies;
    //     })
    //   );

    const pixies: Pixie[] = [];
    for (let i = 0; i < 10; i++) {
      pixies.push(new Pixie("id" + i, "2", new Date(), [7 * i, -7 * i]));
    }
    this._pixies.next(pixies);

    return this._pixies.asObservable().pipe(delay(2000));
  }
}
