import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDevicesService } from 'src/app/services/list-devices.service';
import { Device } from '../../model/device';
import { GaugePage } from '../gauge/gauge.page';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  //@Input() device:any;//variable de entreada que se la manda listado.component
  //@Output() onChange=new EventEmitter(); //se utiliza para devolver algo al padre
  
  //public device:Device;
  public device : Device;
  //public gauge : GaugePage;
  
  constructor(private router: ActivatedRoute, private devService: ListDevicesService) { 

  }

  ngOnInit() {
    let idDevice = this.router.snapshot.paramMap.get('id');
    this.device = this.devService.getDevice(idDevice);
    console.log(this.device);
    console.log(idDevice);
  }

  ionViewWillEnter(){

  }

  // changeDevice(){
  //   this.device.name="Cambio de nombre";
  //   this.onChange.emit(this.device);
  // }
}
