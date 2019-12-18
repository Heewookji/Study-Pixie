import { Component, Renderer2 } from "@angular/core";
import { environment } from "../../../environments/environment";
import * as mapboxgl from "mapbox-gl";
import { StudyService } from "../../studies/study.service";
import { FeatureCollection } from "./map.model";
import { Pixie } from "src/app/pixies/pixie.model";
import { LoadingController } from "@ionic/angular";
import { Study } from "src/app/studies/study.model";
import { Router } from "@angular/router";
import { rendererTypeName } from "@angular/compiler";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent {
  map: mapboxgl.Map;
  style = "mapbox://styles/devserv/ck34b1p5i1bpp1cl32nylbsw7";
  // style = "mapbox://styles/mapbox/light-v10";
  currentLngLat: mapboxgl.LngLatLike = [21, -21];
  features: FeatureCollection;

  constructor(
    private loadingCtrl: LoadingController,
    private router: Router,
    private renderer: Renderer2
  ) {}

  //ionViewDidEnter에 진입하고 맵을 출력한다.
  showStudyMap(studies: Study[]) {
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
    studies.forEach(study => {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage =
        "url(https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg)";
      el.style.width = "10px";
      el.style.height = "10px";
      el.style.borderRadius = "50%";

      //`<p>${study.id}</p><button onclick="navigateToDetail(${study.id})">자세히</button>`;

      // create the popup
      var popup = new mapboxgl.Popup({ offset: 25 });
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(study.lngLat)
        .setPopup(popup) // sets a popup on this marker
        .addTo(this.map);
    });
  }

  //ionViewDidEnter에 진입하고 맵을 출력한다.
  showPixieMap(pixies: Pixie[]) {
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
    pixies.forEach(pixie => {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage =
        "url(https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg)";
      el.style.width = "10px";
      el.style.height = "10px";
      el.style.borderRadius = "50%";

      // create the popup
      var popup = new mapboxgl.Popup({ offset: 25 }).setText(
        pixie.id + pixie.image + pixie.registered
      );
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(pixie.lngLat)
        .setPopup(popup) // sets a popup on this marker
        .addTo(this.map);
    });
  }

  navigateToDetail(studyId: string) {
    this.router.navigate(["/", "studies", "tabs", "discover", studyId]);
  }
}
