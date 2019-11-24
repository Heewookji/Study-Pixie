import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { PixieService } from "../pixie.service";
import { LngLatLike } from "mapbox-gl";
import { Subscription } from "rxjs";
import { Pixie } from "../pixie.model";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"]
})
export class DiscoverPage implements OnInit, OnDestroy {
  @ViewChild("map", { static: false }) map;
  private currentLngLat: LngLatLike;
  private pixieSub: Subscription;
  loadedPixies: Pixie[];
  private initMap = false;

  constructor(
    private pixieService: PixieService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  //온전한 출력을 위한 ionViewDidEnter가 child component에서 동작하지 않으므로, parent에서 해당 컴포넌트 메서드 호출
  ionViewDidEnter() {

    this.currentLngLat = [-7,7]

    if(!this.initMap){
      this.loadingCtrl.create({
        message: "Please wait..."
      }).then(loadingEl => {
        loadingEl.present();
        this.pixieSub = this.pixieService
        .fetchPixiesByLngLat(this.currentLngLat)
        .subscribe(pixies => {
          this.loadedPixies = pixies;
          this.map.showPixieMap(pixies);
          this.initMap = true;
          loadingEl.dismiss();
        });
      });
    }
  }

  ngOnDestroy() {
    if (this.pixieSub) {
      this.pixieSub.unsubscribe();
    }
  }
}
