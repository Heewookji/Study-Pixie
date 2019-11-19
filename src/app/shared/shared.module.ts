import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';


@NgModule({
    declarations: [MapComponent],
    imports: [CommonModule, IonicModule],
    exports: [MapComponent],
    entryComponents: []
})
export class SharedModule {
}
