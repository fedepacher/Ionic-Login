
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../model/device';

@Injectable({
  providedIn: 'root'
})
export class ListDevicesService {

  public listadoDispositivos:Array<Device> = new Array<Device>();
 
  constructor(private http: HttpClient) { 
    this.listadoDispositivos.push(new Device(1, "Luz 1", "Cocina", 10, "beer-outline"));
    this.listadoDispositivos.push(new Device(2, "Pileta", "Patio", 13, "headset-outline"));
    this.listadoDispositivos.push(new Device(3, "Alarma", "Living", 19, "earth-outline"));
    this.listadoDispositivos.push(new Device(4, "Alarma", "Habitacion", 15, "barbell-outline"));
  }

  getDevices(){
    return this.listadoDispositivos;
  }

  getDevice(id):Device{
    return this.listadoDispositivos.filter(device=> device.id == id)[0];
  }

  getDeviceHttp(){
    this.http.get("http://localhost:3000/api/dispositivo");    
  }
  
}
