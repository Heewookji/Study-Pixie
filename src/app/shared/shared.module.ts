import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { FabComponent } from './fab/fab.component';
import { AddComponent } from './modal/study/add/add.component';
import { LocatinPickerComponent } from './picker/locatin-picker/locatin-picker.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [MapComponent, FabComponent, AddComponent,LocatinPickerComponent],
    imports: [CommonModule, IonicModule, FormsModule],
    exports: [MapComponent, FabComponent, AddComponent, LocatinPickerComponent],
    entryComponents: [AddComponent]
})
export class SharedModule {
}
