import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Spray } from '../../model/spray';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  //@Input() logList;
  // @Input() nombre;
  // @Input() pais;
  array:Array<any>[];

  constructor(private modalCtrl : ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.array = this.navParams.get('data');
    //console.log(this.array[0]);
  }

  outModal(){
    this.modalCtrl.dismiss();
  }
}
