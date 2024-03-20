import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlgoritmosSimplesPageRoutingModule } from './algoritmos-simples-routing.module';
import {PlotlyModule} from 'angular-plotly.js';

import { AlgoritmosSimplesPage } from './algoritmos-simples.page';

@NgModule({
  imports: [
    PlotlyModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AlgoritmosSimplesPageRoutingModule
  ],
  declarations: [AlgoritmosSimplesPage]
})
export class AlgoritmosSimplesPageModule {}
