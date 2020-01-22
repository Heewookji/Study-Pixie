import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController, LoadingController, ToastController } from "@ionic/angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { StudyLocation } from "src/app/studies/location.model";
import { StudyService } from "src/app/studies/study.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  form: FormGroup;
  startDate: string;
  endDate: string;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private studyService: StudyService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: "blur",
        validators: Validators.required
      }),
      capacity: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      dateFrom: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      studyLocation: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  locationPicked(studyLocation: StudyLocation) {
    this.form.patchValue({ studyLocation: studyLocation });
  }

  //폼 적합성을 따지고, 새 스터디를 만든다.
  onCreateOffer() {
    if (!this.form.valid) {
      this.toastCtrl.create({
        message: "항목을 채워주세요!",
        closeButtonText: "닫기",
        showCloseButton: true,
        duration: 2000
      })
      .then( toastEl => {
        toastEl.present();
      })
      return;
    }
    console.log(this.form.value);
    this.router.navigate(["/studies/tabs/discover"]);
    // this.loadingCtrl
    //   .create({
    //     message: "잠시 기다려주세요..."
    //   })
    //   .then(loadingEl => {
    //     loadingEl.present();

    //     this.studyService
    //       .addPlace(
    //         this.form.value.title,
    //         this.form.value.description,
    //         +this.form.value.capacity,
    //         new Date(this.form.value.dateFrom),
    //         new Date(this.form.value.dateTo),
    //         this.form.value.location,
    //       )
    //       .subscribe(() => {
    //         loadingEl.dismiss();
    //         this.form.reset();
    //         this.router.navigate(["/studies/tabs/discover"]);
    //       });
    //   });
  }
}
