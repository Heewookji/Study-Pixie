import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PixiesPage } from './pixies.page';


@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [PixiesPage]
})
export class PixiesPageModule {}
