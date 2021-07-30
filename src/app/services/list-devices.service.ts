
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListDevicesService {

  public listadoDispositivos=[{
    name:"Luz 1",
    location: "Cocina",
    description: "Luz central",
    icon: "beer-outline"
  },{
    name:"Video Juego",
    location: "Habitacion",
    description: "Play Station",
    icon: "game-controller-outline"
  },{
    name:"Alarma",
    location: "Habitacion",
    description: "Alarma balcon frente",
    icon: "barbell-outline"
  },{
    name:"Alarma",
    location: "Living",
    description: "Alarma living principal",
    icon: "earth-outline"
  },{
    name:"Pileta",
    location: "Patio",
    description: "Pileta",
    icon: "headset-outline"
  }]

  constructor(private http: HttpClient) { }

  getDispositivos(){
    return this.listadoDispositivos;
  }

  getDispositivoHttp(){
    this.http.get("http://localhost:3000/api/dispositivo");    
  }
  
}
