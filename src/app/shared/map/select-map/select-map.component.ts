import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { LngLatLike } from 'mapbox-gl';

@Component({
  selector: 'app-select-map',
  templateUrl: './select-map.component.html',
  styleUrls: ['./select-map.component.scss'],
})
export class SelectMapComponent implements OnInit {

   //LngLat 담은 이벤트를 상위 컴포넌트 html에서 쓸수 있도록 넘겨준다.
  @Output() locationPick = new EventEmitter<LngLatLike>();
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
    
    // create a HTML element for each feature
    let el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundImage =
      "url(https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg)";
    el.style.width = "10px";
    el.style.height = "10px";
    el.style.borderRadius = "50%";

    this.marker = new mapboxgl.Marker(el)
    .setLngLat(this.currentLngLat)
    .addTo(this.map);

    this.locationPick.emit(this.currentLngLat);

    //클릭했을 때, 마커를 옮긴다.
    this.map.on('click', event => {
      if(this.marker != undefined){
        this.marker.remove();
      }
      this.marker = new mapboxgl.Marker(el)
      .setLngLat(event.lngLat)
      .addTo(this.map);
      this.locationPick.emit(event.lngLat);
    });
  }

}
