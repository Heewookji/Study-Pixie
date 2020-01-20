import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { MapModalComponent } from "../../modal/map-modal/map-modal.component";
import { LngLat } from "mapbox-gl";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: "app-locatin-picker",
  templateUrl: "./location-picker.component.html",
  styleUrls: ["./location-picker.component.scss"]
})
export class LocationPickerComponent implements OnInit {
  isLoading: boolean = false;
  showPreview: boolean = false;
  selectedLocationImage: string;
  selectedLocationLngLat: LngLat = new LngLat(20,-20);

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onPickLocation() {
      this.modalCtrl
        .create({
          component: MapModalComponent,
          componentProps: { selectedLocationLngLat: this.selectedLocationLngLat }
        })
        .then(modalEl => {
          modalEl.present();
          return modalEl.onDidDismiss();
        })
        .then(result => {
          if (result.data != undefined) {
            this.selectedLocationImage = result.data.image;
            this.selectedLocationLngLat = result.data.lngLat;
          }
        });
  }
}
