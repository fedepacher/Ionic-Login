import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicePageRoutingModule } from './device-routing.module';

import { DevicePage } from './device.page';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';
import { TitleDirective } from 'src/app/directives/title.directive';


@NgModule({
  entryComponents:[
    ModalInfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicePageRoutingModule,
    ModalInfoPageModule
  ],
  declarations: [DevicePage, TitleDirective],
  exports:[DevicePage]
})
export class DevicePageModule {}
