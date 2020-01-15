import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { FabComponent } from './fab/fab.component';
import { AddComponent } from './modal/study/add/add.component';
import { LocationPickerComponent } from './picker/location-picker/location-picker.component';
import { FormsModule } from '@angular/forms';
import { MapModalComponent } from './modal/map-modal/map-modal.component';
import { SelectMapComponent } from './map/select-map/select-map.component';


@NgModule({
    declarations: [MapComponent, FabComponent, AddComponent,LocationPickerComponent, MapModalComponent, SelectMapComponent],
    imports: [CommonModule, IonicModule, FormsModule],
    exports: [MapComponent, FabComponent, AddComponent, LocationPickerComponent, MapModalComponent, SelectMapComponent],
    entryComponents: [AddComponent, MapModalComponent]
})
export class SharedModule {
}
