import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddComponent } from '../modal/study/add/add.component';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  onClick(){
    this.modalCtrl.create({
      component: AddComponent
    }).then(modalEl => {
      modalEl.present();
    });
  }
}
