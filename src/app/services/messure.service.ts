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

  /**
   * Metodo que recupera la ultima medicion de la base de datos
   * @param id Id del dispositivo a recuperar la medicion
   * @returns un elemento de tipo medicion 
   */
  getLastMessure(id):Promise<Messure>{
    console.log('Se ejecuta promesa getLastMessure');
    return this._http.get(this.urlApi + "/api/messure/" + id)
    .toPromise()
    .then((value:Messure)=>{
      console.log('Termina ejecucion exitosa promesa getLastMessure');
      return value;
    });
  }

  /**
   * Metodo que recupera la lista de mediciones de la base de datos
   * @param id Id del dispositivo a recuperar las medicion
   * @returns un arreglo de tipo medicion 
   */
  getAllMessure(id):Promise<Messure[]>{
    return this._http.get(this.urlApi + "/api/messure/" + id + "/all")
    .toPromise()
    .then((value:Messure[])=>{
      return value;
    });
  }

  /**
   * Metodo que llama a la api para almacenar una nueva medicion 
   * @param messure Elemento a almacenar
   * @returns resultado de la llamada a la api
   */
  postNewValue(messure:Messure){
    return this._http.post(this.urlApi + "/api/messure/add", {fecha:messure.fecha, valor:messure.valor, dispositivoId:messure.dispositivoId})
    .toPromise().then((result)=>{
      return result;
    })
  }

}
