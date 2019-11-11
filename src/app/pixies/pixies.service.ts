import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PixiesService {
  constructor(private http: HttpClient) {}

  fetchPixiesByLocation(keyword: string) {
    return this.http
      .get(
        `http://127.0.0.1:8080/studyboot/app/json/pixie/fetch?test=${keyword}`
      )
      .pipe(take(1));
  }
}
