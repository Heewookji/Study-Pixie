import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NgForm } from '@angular/forms';


@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {

  @ViewChild("f",null) form: NgForm;
  startDate: string;
  endDate: string;


  
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  onCreateStudy(){
    console.log("create!");
  }
}
