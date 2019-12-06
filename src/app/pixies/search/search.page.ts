import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  Renderer2,
  ViewChildren,
  QueryList
} from "@angular/core";
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
  @ViewChildren("items") items;

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

    this.renderer.listen(this.searchbar.nativeElement, "ionInput", this.handleInput);
  }

  ngOnDestroy() {
    if (this.pixieSub) {
      this.pixieSub.unsubscribe();
    }
  }

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      this.items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        this.renderer.setStyle(item.nativeElement, 'display', shouldShow ? "block" : "none" );
      });
    });
  }
}
