
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListDevicesService {

  public listadoDispositivos=[{
    name:"Dispositivo 1",
    location: "Cocina",
    description: "Sensor de puerta"
  },{
    name:"Dispositivo 2",
    location: "Living",
    description: "Sensor de humo"
  }]

  constructor(private http: HttpClient) { }

  getDispositivos(){
    return this.listadoDispositivos;
  }

  getDispositivoHttp(){
    this.http.get("http://localhost:3000/api/dispositivo");    
  }
  
}
