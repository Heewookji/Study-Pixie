import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PixiesPage } from './pixies.page';
import { PixiesRoutingModule } from './pixies-routing.module';


@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    PixiesRoutingModule
  ],
  declarations: [PixiesPage]
})
export class PixiesPageModule {}
