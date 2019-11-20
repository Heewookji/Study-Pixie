import { Component, OnInit, Output, EventEmitter, Renderer2, ElementRef, ViewChild } from "@angular/core";


@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"]
})
export class DiscoverPage implements OnInit {

  @ViewChild('map', {static:false}) map;

  constructor() {}

  ngOnInit() {}

  //온전한 출력을 위한 ionViewDidEnter가 child component에서 동작하지 않으므로, parent에서 해당 컴포넌트 메서드 호출
  ionViewDidEnter(){
    this.map.showMap();
  }

}
