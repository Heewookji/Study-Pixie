import { Component, Renderer2 } from "@angular/core";
import { environment } from "../../../environments/environment";
import * as mapboxgl from "mapbox-gl";
import { Pixie } from "src/app/pixies/pixie.model";
import { LoadingController } from "@ionic/angular";
import { Study } from "src/app/studies/study.model";

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

  constructor(private loadingCtrl: LoadingController) {}

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

      var popupContent = document.createElement("div");
      popupContent.innerHTML =
      `<p>${study.id}</p><ion-button onclick="navigateToDetail(${study.id})">자세히</ion-button>`;

      // create the popup
      var popup = new mapboxgl.Popup({ offset: 25 }).setDOMContent(popupContent);
    
      //.setHTML(`<p>${study.id}</p><ion-button onclick="navigateToDetail(${study.id})">자세히</ion-button>`);
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

  navigateToDetail(studyId: number) {
    alert(studyId);
  }

  showSelectMap(){
    //맵 설정
  }
}
