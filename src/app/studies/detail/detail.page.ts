import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {
  backPage: string;
  studyId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has("studyId")) {
        this.navCtrl.navigateBack("../");
        return;
      }
      this.studyId = paramMap.get("studyId");

      this.backPage = this.router.url.substring(
        0,
        this.router.url.lastIndexOf("/")
      );

    });
  }
}
