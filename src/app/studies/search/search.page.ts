import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";
import { LoadingController, IonSearchbar } from "@ionic/angular";
import { Study } from '../study.model';
import { StudyService } from '../study.service';

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit, OnDestroy {
  @ViewChild("searchbar", { static: false }) searchbar: IonSearchbar;
  loadedStudies: Study[];
  private studySub: Subscription;
  isLoading = false;

  constructor(
    private studyService: StudyService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadingCtrl
      .create({
        message: "Please wait..."
      })
      .then(loadingEl => {
        loadingEl.present();
        this.studySub = this.studyService
          .fetchStudiesByGrade(10)
          .subscribe(studies => {
            this.loadedStudies = studies;
            loadingEl.dismiss();
          });
      });
  }

  ngOnDestroy() {
    if (this.studySub) {
      this.studySub.unsubscribe();
    }
  }

  //searchbar 내용이 바뀔 때마다 ajax로 해당 키워드 스터디를 가져온다.
  onSearch(event: any) {
    this.loadingCtrl
      .create({
        message: "Please wait..."
      })
      .then(loadingEl => {
        loadingEl.present();
        this.studySub = this.studyService
          .fetchStudiesByKeyword(this.searchbar.value)
          .subscribe(studies => {
            this.loadedStudies = studies;
            loadingEl.dismiss();
            this.searchbar.setFocus();
          });
      }); 

  }


}
