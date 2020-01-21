import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { StudyLocation } from 'src/app/studies/location.model';


@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {

  @ViewChild("f",null) form: FormGroup;
  startDate: string;
  endDate: string;


  
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: "blur",
        validators: Validators.required
      }),
      description: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.min(1)]
      }),
      dateFrom: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      location: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null)
    });

  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  locationPicked(studyLocation: StudyLocation){
    console.log(studyLocation);
  }
}
