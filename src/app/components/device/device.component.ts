import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {

  
  @Input() device:any;//variable de entreada que se la manda listado.component
  @Output() onChange=new EventEmitter(); //se utiliza para devolver algo al padre
  constructor() { 

  }

  ngOnInit() {

  }

  changeDevice(){
    this.device.name="Cambio de nombre";
    this.onChange.emit(this.device);
  }
}
