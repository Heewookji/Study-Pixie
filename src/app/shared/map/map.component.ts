import { Component } from "@angular/core";
import { environment } from "../../../environments/environment";
import * as mapboxgl from "mapbox-gl";
import { StudyService } from "../../studies/study.service";
import { FeatureCollection } from "./map.model";
import { Pixie } from "src/app/pixies/pixie.model";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent {
  map: mapboxgl.Map;
  style = "mapbox://styles/devserv/ck34b1p5i1bpp1cl32nylbsw7";
  // style = "mapbox://styles/mapbox/light-v10";
  currentLngLat: mapboxgl.LngLatLike = [-122.41, 37.75];
  init = false;
  features: FeatureCollection;

  constructor() {}

  //ionViewDidEnter에 진입하고 맵을 출력한다.
  showStudyMap() {
    if (!this.init) {
      mapboxgl.accessToken = environment.mapboxAccessToken;
      this.map = new mapboxgl.Map({
        container: "map",
        style: this.style,
        zoom: 13,
        center: this.currentLngLat
      });
      //컨트롤 바 추가
      this.map.addControl(new mapboxgl.NavigationControl());
    }

    this.init = true;

    this.map.on("load", event => {
      this.features.features.forEach(marker => {
        // create a HTML element for each feature
        var el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage =
          "url(https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg)";
        el.style.width = "50px";
        el.style.height = "50px";
        el.style.borderRadius = "50%";

        // create the popup
        var popup = new mapboxgl.Popup({ offset: 25 }).setText(
          "Construction on the Washington Monument began in 1848."
        );
        // make a marker for each feature and add to the map
        var mark = new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(popup) // sets a popup on this marker
          .addTo(this.map);
      });
    });
  }

  //ionViewDidEnter에 진입하고 맵을 출력한다.
  showPixieMap(pixies: Pixie[]) {
    if (!this.init) {
      mapboxgl.accessToken = environment.mapboxAccessToken;
      this.map = new mapboxgl.Map({
        container: "map",
        style: this.style,
        zoom: 13,
        center: this.currentLngLat
      });
      //컨트롤 바 추가
      this.map.addControl(new mapboxgl.NavigationControl());
    }
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
      var popup = new mapboxgl.Popup({ offset: 25 }).setText(pixie.id);
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(pixie.lngLat)
        .setPopup(popup) // sets a popup on this marker
        .addTo(this.map);
    });
    this.init = true;
  }

}
