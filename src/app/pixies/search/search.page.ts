import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  Renderer2,
  ElementRef
} from "@angular/core";
import { Pixie } from "src/app/pixies/pixie.model";
import { PixieService } from "../pixie.service";
import { Subscription } from "rxjs";
import { LoadingController, IonSearchbar } from "@ionic/angular";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit, OnDestroy {
  @ViewChild("searchbar", { static: false }) searchbar: IonSearchbar;
  loadedPixies: Pixie[];
  private pixieSub: Subscription;
  isLoading = false;

  constructor(
    private pixieService: PixieService,
    private loadingCtrl: LoadingController,
    private renderer: Renderer2
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

  onSearch(event: any) {
    this.loadingCtrl
      .create({
        message: "Please wait..."
      })
      .then(loadingEl => {
        loadingEl.present();
        this.pixieSub = this.pixieService
          .fetchPixiesByKeyword(this.searchbar.value)
          .subscribe(pixies => {
            this.loadedPixies = pixies;
            loadingEl.dismiss();
            this.searchbar.setFocus();
          });
      }); 

  }


}
