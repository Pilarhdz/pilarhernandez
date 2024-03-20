import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilarhernandezPage } from './pilarhernandez.page';

const routes: Routes = [
  {
    path: '',
    component: PilarhernandezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilarhernandezPageRoutingModule {}
