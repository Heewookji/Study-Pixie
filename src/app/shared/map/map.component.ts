import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import * as mapboxgl from "mapbox-gl";
import { MapService } from "./map.service";
import { GeoJson, FeatureCollection } from "./map";
import { Feature } from "geojson";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  ngOnInit(): void {}
  map: mapboxgl.Map;
  style = "mapbox://styles/devserv/ck34b1p5i1bpp1cl32nylbsw7";
  // style = "mapbox://styles/mapbox/light-v10";
  lat = 37.75;
  lng = -122.41;
  init = false;
  monument: mapboxgl.LngLatLike = [-122.414, 37.776];

  features = new FeatureCollection([
    {
      // feature for Mapbox DC
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.03238901390978, 38.913188059745586]
      },
      properties: {
        title: "Mapbox DC",
        icon: "monument"
      }
    },
    {
      // feature for Mapbox SF
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.414, 37.776]
      },
      properties: {
        title: "Mapbox SF",
        icon: "harbor"
      }
    }
  ]);

  constructor(private mapService: MapService) {}

  //ionview에 진입하고 맵을 출력한다.
  ngAfterContentChecked() {
    if (!this.init) {
      mapboxgl.accessToken = environment.mapboxAccessToken;
      this.map = new mapboxgl.Map({
        container: "map",
        style: this.style,
        zoom: 13,
        center: this.monument
      });

      //컨트롤 바 추가
      this.map.addControl(new mapboxgl.NavigationControl());
    }
    this.init = true;

    this.map.on("load", event => {
      // this.map.addLayer({
      //   id: "points",
      //   type: "symbol",
      //   source: {
      //     type: "geojson",
      //     data: {
      //       type: "FeatureCollection",
      //       features: [
      //         {
      //           // feature for Mapbox DC
      //           type: "Feature",
      //           geometry: {
      //             type: "Point",
      //             coordinates: [-77.03238901390978, 38.913188059745586]
      //           },
      //           properties: {
      //             title: "Mapbox DC",
      //             icon: "monument"
      //           }
      //         },
      //         {
      //           // feature for Mapbox SF
      //           type: "Feature",
      //           geometry: {
      //             type: "Point",
      //             coordinates: [-122.414, 37.776]
      //           },
      //           properties: {
      //             title: "Mapbox SF",
      //             icon: "harbor"
      //           }
      //         }
      //       ]
      //     }
      //   },
      //   layout: {
      //     // get the icon name from the source's "icon" property
      //     // concatenate the name to get an icon from the style's sprite sheet
      //     "icon-image": "marker-15",
      //     // get the title name from the source's "title" property
      //     "text-field": ["get", "title"],
      //     "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      //     "text-offset": [0, 0.6],
      //     "text-anchor": "top"
      //   }
      // });

      

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
}
