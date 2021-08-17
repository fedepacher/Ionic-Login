import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '../model/device';
import { AuthenticationService } from '../services/authentication.service';
import { DevicesService } from '../services/devices.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  devicesList:Device[];
  constructor(
    private authService: AuthenticationService, 
    private router: Router, 
    private devService: DevicesService) {
      this.callDeviceService();
    }

    /**
     * Metodo que obtiene la lista de dispositivos de la base de datos
     */
    async callDeviceService(){
      console.log("Lamo al service de device")
      this.devicesList = await this.devService.getDevices();

      console.log("Lista que devuelve la promesa");
      console.log(this.devicesList);
      //let device = await this.devService.getDevice(list[0]);
    }

  /**
   * Evento del boton logout
   */
  async logout(){
    try{
      await this.authService.logout();
      this.router.navigateByUrl('/', {replaceUrl:true});
    }
    catch(error){
      console.log('Error->', error);
    }
  }
}
