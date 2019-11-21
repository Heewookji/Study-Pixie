import { Component, OnInit } from '@angular/core';
import { PixieService } from './pixie.service';

@Component({
  selector: 'app-pixies',
  templateUrl: './pixies.page.html',
  styleUrls: ['./pixies.page.scss'],
})
export class PixiesPage implements OnInit {

  constructor(private pixieService : PixieService) { }
  ngOnInit() {
  }
}
