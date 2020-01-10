import { Component, OnInit } from "@angular/core";
import * as mapboxgl from "mapbox-gl";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-select-map",
  templateUrl: "./select-map.component.html",
  styleUrls: ["./select-map.component.scss"]
})
export class SelectMapComponent implements OnInit {
  map: mapboxgl.Map;
  style = "mapbox://styles/devserv/ck34b1p5i1bpp1cl32nylbsw7";
  // style = "mapbox://styles/mapbox/light-v10";
  currentLngLat: mapboxgl.LngLatLike = [21, -21];

  constructor() {}

  ngOnInit() {}

  showSelectMap() {
    //맵 설정
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapboxAccessToken;
    this.map = new mapboxgl.Map({
      container: "map",
      style: this.style,
      zoom: 13,
      center: this.currentLngLat,
      attributionControl: false
    });
    //컨트롤 바 추가
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
