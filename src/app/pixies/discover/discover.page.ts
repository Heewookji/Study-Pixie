import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { environment } from "../../../environments/environment";
import * as L from "leaflet";
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"]
})
export class DiscoverPage implements OnInit, AfterViewInit {
  private map;
  private style = "mapbox://styles/mapbox/streets-v11";
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  // leaflet
  private initMap(): void {
    this.map = L.map("map", {
      center: [39.8282, -98.5795],
      zoom: 3
    });
  }

  //view 단이 출력 된 뒤 수행하는 메서드
  ngAfterViewInit() {
    //leaflet 이용할 경우
    this.initMap();
    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    );
   tiles.addTo(this.map);

    //mapbox 이용할 경우
    // this.map = new mapboxgl.Map({
    //   container: "map",
    //   style: this.style,
    //   zoom: 13,
    //   center: [39.8282, -98.5795]
    // });
    // // Add map controls
    // this.map.addControl(new mapboxgl.NavigationControl());
  }
}
