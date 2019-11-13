import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"]
})
export class DiscoverPage implements OnInit, AfterViewInit {
  @ViewChild("map", { static: false }) mapElementRef: ElementRef;
  googleMaps: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  //view 단이 출력 된 뒤 수행하는 메서드
  ngAfterViewInit() {
    this.getGoogleMaps().then(googleMaps => {
      this.googleMaps = googleMaps;

      //맵을 출력하고 싶은 앨리먼트 설정
      const mapEl = this.mapElementRef.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
      //출력이 끝난 뒤에 visible 클래스를 추가해준다.
      // this.googleMaps.event.addListenerOnce(map, "idle", () => {
      //   this.renderer.addClass(mapEl, "visible");
      // });
    });
  }

  getGoogleMaps(): Promise<any> {
    //window 객체를 받는다.
    const win = window as any;
    const googleModule = win.google;

    //window에 구글모듈객체가 있다면 resolve 하여 리턴
    if (googleModule && googleModule.map) {
      return Promise.resolve(googleModule.maps);
    }

    //없다면 도큐멘트에 직접 스크립트를 넣어 resolve할 window의 맵객체를 만들어주고 프로미스를 리턴한다.(map javascript api)
    return new Promise((resolve, reject) => {
      //callback 메서드를 정의할 수도 있다.
      const callbackScript = document.createElement("script");
      callbackScript.text = `function initMap(){}`;
      document.body.appendChild(callbackScript);

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.GoogleApiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      //로드되고나면 구글 window객체에 구글모듈이 자동으로 삽입되어 있음.
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps);
        } else {
          reject("Google Api SDK is not available!");
        }
      };
    });
  }
}
