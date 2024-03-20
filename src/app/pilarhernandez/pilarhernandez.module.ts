import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilarhernandezPageRoutingModule } from './pilarhernandez-routing.module';

import { PilarhernandezPage } from './pilarhernandez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilarhernandezPageRoutingModule
  ],
  declarations: [PilarhernandezPage]
})
export class PilarhernandezPageModule {}
