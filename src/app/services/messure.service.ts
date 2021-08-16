import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Messure } from '../model/messure';

@Injectable({
  providedIn: 'root'
})
export class MessureService {

  urlApi = "http://localhost:8000"
  //public listadoDispositivos:Array<Device> = new Array<Device>();
 
  constructor(private _http: HttpClient) { }


  getLastMessure(id):Promise<Messure>{
    console.log('Se ejecuta promesa getLastMessure');
    return this._http.get(this.urlApi + "/api/messure/" + id)
    .toPromise()
    .then((value:Messure)=>{
      console.log('Termina ejecucion exitosa promesa getLastMessure');
      return value;
    });
  }

  getAllMessure(id):Promise<Messure[]>{
    return this._http.get(this.urlApi + "/api/messure/" + id + "/all")
    .toPromise()
    .then((list:Messure[])=>{
      return list;
    });
  }

  postNewValue(messure:Messure){
    return this._http.post(this.urlApi + "/api/messure/add", {fecha:messure.fecha, valor:messure.valor, dispositivoId:messure.dispositivoId})
    .toPromise().then((result)=>{
      return result;
    })
  }

}
