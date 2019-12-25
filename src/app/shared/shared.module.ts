import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { FabComponent } from './fab/fab.component';
import { AddComponent } from './modal/study/add/add.component';


@NgModule({
    declarations: [MapComponent, FabComponent, AddComponent],
    imports: [CommonModule, IonicModule],
    exports: [MapComponent, FabComponent, AddComponent],
    entryComponents: [AddComponent]
})
export class SharedModule {
}
