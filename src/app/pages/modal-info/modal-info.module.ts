import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ModalInfoPage } from './modal-info.page';
import { TitleDirective } from '../../directives/title.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ModalInfoPage, TitleDirective]
})
export class ModalInfoPageModule {}
