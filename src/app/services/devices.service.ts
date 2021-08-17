
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../model/device';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  urlApi = "http://localhost:8000"
  
  constructor(private _http: HttpClient) { }

  /**
   * Metodo que llama a la api para recuperar todos los dispositivos de la base de datos
   * @returns Devuelve el listado de dispositivos almacenados
   */
  getDevices():Promise<Device[]>{
    return this._http.get(this.urlApi + "/api/device")
    .toPromise()//devuelve una promesa
    .then((list:Device[])=>{//cuando se tiene el valor en el then se castea y se convierte al tipo que se necesita devolver
      return list;
    });
  }

  /**
   * Metodo que llama a la api para recuperar un dispositivo de la base de datos
   * @param id Id del dispositivo a recuperar
   * @returns Devuelve el listado de dispositivos almacenados
   */
  getDevice(id):Promise<Device>{
    console.log('Se ejecuta promesa getDevice');
    return this._http.get(this.urlApi + "/api/device/" + id)
    .toPromise()//devuelve una promesa
    .then((device:Device)=>{//cuando se tiene el valor en el then se castea y se convierte al tipo que se necesita devolver
      console.log('Termina ejecucion exitosa promesa getDevice');
      return device;
    });
    
  }

}
