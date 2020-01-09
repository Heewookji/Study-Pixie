import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-map-modal",
  templateUrl: "./map-modal.component.html",
  styleUrls: ["./map-modal.component.scss"]
})
export class MapModalComponent implements OnInit {
  @ViewChild("modalMap", { static: false }) modalMap;
  private initMap = false;

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
          this.modalMap.showSelectMap();
          this.initMap = true;
          loadingEl.dismiss();
        });
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
