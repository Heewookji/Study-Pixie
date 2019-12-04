import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { Pixie } from "src/app/pixies/pixie.model";
import { PixieService } from "../pixie.service";
import { Subscription } from "rxjs";
import { LoadingController } from "@ionic/angular";
import { take } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit, OnDestroy {
  @ViewChild("searchbar", { static: false }) searchbar;
  loadedPixies: Pixie[];
  private pixieSub: Subscription;
  isLoading = false;

  constructor(
    private pixieService: PixieService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadingCtrl
      .create({
        message: "Please wait..."
      })
      .then(loadingEl => {
        loadingEl.present();
        this.pixieSub = this.pixieService
          .fetchPixiesByGrade(10)
          .subscribe(pixies => {
            this.loadedPixies = pixies;
            loadingEl.dismiss();
          });
      });
  }

  ngOnDestroy() {
    if (this.pixieSub) {
      this.pixieSub.unsubscribe();
    }
  }

  ionViewDidEnter() {
    console.log(this.searchbar);
  }
}
