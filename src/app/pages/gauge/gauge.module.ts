import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaugePageRoutingModule } from './gauge-routing.module';

import { GaugePage } from './gauge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaugePageRoutingModule
  ],
  declarations: [GaugePage],
  exports:[GaugePage]
})
export class GaugePageModule {}
