import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from '../../modal/map-modal/map-modal.component';

@Component({
  selector: 'app-locatin-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {

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
      return modalEl.onDidDismiss();
    }).then(result => {
      this.selectedLocationImage = result.data;
    })
  }

}
