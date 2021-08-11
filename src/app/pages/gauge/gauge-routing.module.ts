import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaugePage } from './gauge.page';

const routes: Routes = [
  {
    path: '',
    component: GaugePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaugePageRoutingModule {}
