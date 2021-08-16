import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spray } from '../model/spray';

@Injectable({
  providedIn: 'root'
})
export class SprayService {
  urlApi = "http://localhost:8000"

  constructor(private _http: HttpClient) { }

  getAllSpray(id):Promise<Spray[]>{
    return this._http.get(this.urlApi + "/api/spray/" + id + "/all")
    .toPromise()
    .then((value:Spray[])=>{
      return value;
    });    
  }

  postNewValue(spray:Spray){
    console.log("apertura:" + spray.apertura + ",fecha:"+ spray.fecha + ",electrovalvulaId:" + spray.electrovalvulaId);
    return this._http.post(this.urlApi + "/api/spray/add", {apertura:spray.apertura, fecha:spray.fecha, electrovalvulaId:spray.electrovalvulaId})
    .toPromise().then((result)=>{
      return result;
    });
  }

}
