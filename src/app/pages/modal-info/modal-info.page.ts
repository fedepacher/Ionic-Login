import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Spray } from '../../model/spray';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  array:Array<any>[];
  table:String="";

  constructor(private modalCtrl : ModalController,
    private navParams: NavParams) { }

    /**
     * Obtinene la tabla de elementos a mostrar en pantalla y que tipo de elemento es, spray o messure
     */
  ngOnInit() {
    this.table = this.navParams.get('table');
    this.array = this.navParams.get('data');
    console.log(this.array);
    console.log(this.table);
  }

  /**
   * Elimina el modal de la pantalla
   */
  outModal(){
    this.modalCtrl.dismiss();
  }
}
