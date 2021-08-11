import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicePageRoutingModule } from './device-routing.module';

import { DevicePage } from './device.page';
import { GaugePageModule } from '../gauge/gauge.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicePageRoutingModule,
    GaugePageModule
  ],
  declarations: [DevicePage],
  exports:[DevicePage]
})
export class DevicePageModule {}
