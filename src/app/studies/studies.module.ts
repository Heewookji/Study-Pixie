import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudiesPage } from './studies.page';
import { StudiesRoutingModule } from './studies-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudiesRoutingModule
  ],
  declarations: [StudiesPage]
})
export class StudiesPageModule {}
