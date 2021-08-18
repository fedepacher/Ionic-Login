import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicePageRoutingModule } from './device-routing.module';

import { DevicePage } from './device.page';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  entryComponents:[
    ModalInfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicePageRoutingModule,
    ModalInfoPageModule,
    SharedModule
  ],
  declarations: [DevicePage],
  exports:[DevicePage]
})
export class DevicePageModule {}
