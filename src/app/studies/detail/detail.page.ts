import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Study } from '../study.model';
import { StudyService } from '../study.service';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {
  referer: string;
  studyId: string;
  study: Study;
  isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private studyService: StudyService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {

      //backbutton을 위한 referer 따오기
      if (!paramMap.has("studyId")) {
        this.navCtrl.navigateBack("../");
        return;
      }
      this.studyId = paramMap.get("studyId");
      this.referer = this.router.url.substring(
        0,
        this.router.url.lastIndexOf("/")
      );
    });

    //study 불러오기
    this.isLoading = true;
    this.studyService.getStudy(this.studyId)
    .subscribe(
      study => {
        this.study = study;
        this.isLoading = false;
      }
    );
  }

  onShowFullMap(){
  }


}
