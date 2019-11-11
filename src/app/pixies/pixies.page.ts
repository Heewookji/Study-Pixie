import { Component, OnInit } from '@angular/core';
import { PixiesService } from './pixies.service';

@Component({
  selector: 'app-pixies',
  templateUrl: './pixies.page.html',
  styleUrls: ['./pixies.page.scss'],
})
export class PixiesPage implements OnInit {

  constructor(private pixiesService : PixiesService) { }

  ngOnInit() {
  }

  fetchPixiesByLocation(){

    let keyword = prompt('keyword?');

    this.pixiesService.fetchPixiesByLocation(keyword).subscribe(test=> {
      console.log(test);
    });
  }

}
