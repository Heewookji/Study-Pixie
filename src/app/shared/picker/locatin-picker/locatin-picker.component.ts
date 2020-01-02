import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locatin-picker',
  templateUrl: './locatin-picker.component.html',
  styleUrls: ['./locatin-picker.component.scss'],
})
export class LocatinPickerComponent implements OnInit {

  isLoading: boolean = false;
  showPreview: boolean = false;
  selectedLocationImage: string;

  constructor() { }

  ngOnInit() {}

  onPickLocation(){

  }

}
