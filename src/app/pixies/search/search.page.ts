import { Component, OnInit, ViewChild } from '@angular/core';
import { Pixie } from 'src/app/pixies/pixie.model';
import { PixieService } from '../pixie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild("searchbar", { static: false }) searchbar;
  loadedPixies: Pixie[];
  isLoading = false;

  constructor(private pixieService: PixieService) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    console.log(this.searchbar);
  }

}
