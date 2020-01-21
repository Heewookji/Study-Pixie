import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { MapModalComponent } from "../../modal/map-modal/map-modal.component";
import { LngLat } from "mapbox-gl";
import { StudyLocation } from 'src/app/studies/location.model';

@Component({
  selector: "app-locatin-picker",
  templateUrl: "./location-picker.component.html",
  styleUrls: ["./location-picker.component.scss"]
})
export class LocationPickerComponent implements OnInit {
  @Output() locationPicked = new EventEmitter<StudyLocation>();
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

            const pickedLocation: StudyLocation = {
              lat: this.selectedLocationLngLat.lat,
              lng: this.selectedLocationLngLat.lng,
              staticMapImageUrl: this.selectedLocationImage
            };
            this.locationPicked.emit(pickedLocation);
          }
        });
  }
}
