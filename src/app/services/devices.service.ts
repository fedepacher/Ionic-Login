
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../model/device';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  urlApi = "http://localhost:8000"
  //public listadoDispositivos:Array<Device> = new Array<Device>();
 
  constructor(private _http: HttpClient) { 
    // this.listadoDispositivos.push(new Device(1, "Luz 1", "Cocina", 10, "beer-outline"));
    // this.listadoDispositivos.push(new Device(2, "Pileta", "Patio", 13, "headset-outline"));
    // this.listadoDispositivos.push(new Device(3, "Alarma", "Living", 19, "earth-outline"));
    // this.listadoDispositivos.push(new Device(4, "Alarma", "Habitacion", 15, "barbell-outline"));
  }

  getDevices():Promise<Device[]>{
    return this._http.get(this.urlApi + "/api/device")
    .toPromise()//devuelve una promesa
    .then((list:Device[])=>{//cuando se tiene el valor en el then se castea y se convierte al tipo que se necesita devolver
      return list;
    });
  }

  getDevice(id):Promise<Device>{
    console.log(this.urlApi + "/api/device/" + id);
    return this._http.get(this.urlApi + "/api/device/" + id)
    .toPromise()//devuelve una promesa
    .then((device:Device)=>{//cuando se tiene el valor en el then se castea y se convierte al tipo que se necesita devolver
      return device;
    });
  }

}
