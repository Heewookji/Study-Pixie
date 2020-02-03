import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"]
})
export class AuthPage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {}

  signUp() {
    this.actionSheetCtrl.create({
      header: "회원가입",
      buttons: [
        {
          text: "일반 회원가입",
          handler: () => {
            console.log("일반 clicked");
          }
        },
        {
          text: "구글 아이디로 가입",
          icon: "logo-google",
          handler: () => {
            console.log("구글 clicked");
          }
        },
        {
          text: "페이스북 아이디로 가입",
          icon: "logo-facebook",
          handler: () => {
            console.log("페이스북 clicked");
          }
        },
        {
          text: "취소",
          role: "cancel"
        }
      ]
    }).then( actionSheetEl => {
      actionSheetEl.present();
    })
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.authenticate(email, password);
    form.reset();
  }
  authenticate(email: string, password: string) {
    this.authService.login(email, password);
    this.router.navigateByUrl("studies/tabs/discover");
  }
}
