import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { LngLatLike } from "mapbox-gl";
import { Subscription } from "rxjs";
import { Study } from "../study.model";
import { LoadingController } from "@ionic/angular";
import { StudyService } from '../study.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"]
})
export class DiscoverPage implements OnInit, OnDestroy {
  @ViewChild("map", { static: false }) map;
  private currentLngLat: LngLatLike;
  private studySub: Subscription;
  loadedStudies: Study[];
  private initMap = false;

  constructor(
    private studyService: StudyService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {}

  //온전한 출력을 위한 ionViewDidEnter가 child component에서 동작하지 않으므로, parent에서 해당 컴포넌트 메서드 호출
  ionViewDidEnter() {

    this.currentLngLat = [-7,7]

    if(!this.initMap){
      this.loadingCtrl.create({
        message: "잠시 기다려주세요.."
      }).then(loadingEl => {
        loadingEl.present();
        this.studySub = this.studyService
        .fetchStudiesByLngLat(this.currentLngLat)
        .subscribe(studies => {
          this.loadedStudies = studies;
          this.map.showStudyMap(studies);
          this.initMap = true;
          loadingEl.dismiss();
        });
      });
    }
  }
  ngOnDestroy() {
    if (this.studySub) {
      this.studySub.unsubscribe();
    }
  }
  
}
