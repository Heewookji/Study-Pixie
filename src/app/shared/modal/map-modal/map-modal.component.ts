import { Component, OnInit, ViewChild, Output, EventEmitter } from "@angular/core";
import { ModalController, LoadingController } from "@ionic/angular";
import { LngLatLike } from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-map-modal",
  templateUrl: "./map-modal.component.html",
  styleUrls: ["./map-modal.component.scss"]
})
export class MapModalComponent implements OnInit {
  @ViewChild("map", { static: true }) map;
  private initMap = false;
  selectedLocation: LngLatLike;
  @Output() selectedLocationImage: EventEmitter<string>;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    if (!this.initMap) {
      this.loadingCtrl
        .create({
          message: "잠시 기다려주세요.."
        })
        .then(loadingEl => {
          loadingEl.present();
          this.map.showSelectMap();
          this.initMap = true;
          loadingEl.dismiss();
        });
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  //선택시마다 lnglat을 select map 컴포넌트에서 받아 저장한다.
  selectLocation(lngLat: LngLatLike){
    this.selectedLocation = lngLat;
  }

  //제출시에 static image를 받아온다.
  confirmSelect(){
   this.modalCtrl
   .dismiss(`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-76.2047,38.7948,5/300x200?access_token=${environment.mapboxAccessToken}`);
    //(`https://api.mapbox.com/styles/v1/${}/${}/static/-75.953,42.1165,4.76/300x200?access_token=${environment.mapboxAccessToken}`)
   
  }

}
