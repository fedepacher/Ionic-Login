import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spray } from '../model/spray';

@Injectable({
  providedIn: 'root'
})
export class SprayService {
  urlApi = "http://localhost:8000"

  constructor(private _http: HttpClient) { }

  /**
   * Obtiene todo los logs de riego
   * @param id Id del dispositivo a obtener los logs
   * @returns Devuelve un arreglo con todos los logs
   */
  getAllSpray(id):Promise<Spray[]>{
    return this._http.get(this.urlApi + "/api/spray/" + id + "/all")
    .toPromise()
    .then((value:Spray[])=>{
      return value;
    });    
  }

  /**
   * Metodo que llama a la api para insertar un nuevo valor de log e la base de datos
   * @param spray elemento a insertar en la base de datos
   * @returns 
   */
  postNewValue(spray:Spray){
    console.log("apertura:" + spray.apertura + ",fecha:"+ spray.fecha + ",electrovalvulaId:" + spray.electrovalvulaId);
    return this._http.post(this.urlApi + "/api/spray/add", {apertura:spray.apertura, fecha:spray.fecha, electrovalvulaId:spray.electrovalvulaId})
    .toPromise().then((result)=>{
      return result;
    });
  }

}
