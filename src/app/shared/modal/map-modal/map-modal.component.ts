import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from "@angular/core";
import { ModalController, LoadingController } from "@ionic/angular";
import {  LngLat } from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-map-modal",
  templateUrl: "./map-modal.component.html",
  styleUrls: ["./map-modal.component.scss"]
})


export class MapModalComponent implements OnInit {
  @ViewChild("map", { static: true }) map;
  private initMap = false;
  @Input() selectedLocationLngLat: LngLat;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    alert(this.selectedLocationLngLat);
    if (!this.initMap) {
      this.loadingCtrl
        .create({
          message: "잠시 기다려주세요.."
        })
        .then(loadingEl => {
          loadingEl.present();
          this.map.showSelectMap(this.selectedLocationLngLat);
          this.initMap = true;
          loadingEl.dismiss();
        });
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  //선택시마다 lnglat을 select map 컴포넌트에서 받아 저장한다.
  selectLocation(lngLat: LngLat){
    this.selectedLocationLngLat = lngLat;
  }

  //제출시에 이미지 url과 lngLat을 넘겨준다.
  confirmSelect(){
    
    let returnData = { image: `https://api.mapbox.com/v4/mapbox.emerald/pin-m-0+008cff(${this.selectedLocationLngLat.lat},${this.selectedLocationLngLat.lng})/${this.selectedLocationLngLat.lat},${this.selectedLocationLngLat.lng},13/300x200@2x.png?access_token=${environment.mapboxAccessToken}`,
  lngLat: this.selectedLocationLngLat }
   this.modalCtrl
   .dismiss(returnData);
    //(`https://api.mapbox.com/styles/v1/${}/${}/static/-75.953,42.1165,4.76/300x200?access_token=${environment.mapboxAccessToken}`)
  }

}
