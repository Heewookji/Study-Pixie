import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from '../../modal/map-modal/map-modal.component';

@Component({
  selector: 'app-locatin-picker',
  templateUrl: './locatin-picker.component.html',
  styleUrls: ['./locatin-picker.component.scss'],
})
export class LocatinPickerComponent implements OnInit {

  isLoading: boolean = false;
  showPreview: boolean = false;
  selectedLocationImage: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onPickLocation(){
    this.modalCtrl.create({
      component: MapModalComponent
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
