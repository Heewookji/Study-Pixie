import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-select-map',
  templateUrl: './select-map.component.html',
  styleUrls: ['./select-map.component.scss'],
})
export class SelectMapComponent implements OnInit {

  map: mapboxgl.Map;
  style = "mapbox://styles/devserv/ck34b1p5i1bpp1cl32nylbsw7";
  currentLngLat: mapboxgl.LngLatLike = [21, -21];
  marker: mapboxgl.Marker;

  constructor() { }

  ngOnInit() {}

  showSelectMap() {
    //맵 설정
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapboxAccessToken;
    this.map = new mapboxgl.Map({
      container: "selectMap",
      style: this.style,
      zoom: 13,
      center: this.currentLngLat,
      attributionControl: false
    });
    //컨트롤 바 추가
    this.map.addControl(new mapboxgl.NavigationControl());
    
    this.map.on('click', event => {
      if(this.marker != undefined){
        this.marker.remove();
      }
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage =
        "url(https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg)";
      el.style.width = "10px";
      el.style.height = "10px";
      el.style.borderRadius = "50%";
      
      this.marker = new mapboxgl.Marker(el)
        .setLngLat(event.lngLat)
        .addTo(this.map);
    });
  }

}
