import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceComponent } from '../components/device/device.component';
import { AuthenticationService } from '../services/authentication.service';
import { ListDevicesService } from '../services/list-devices.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //@ViewChildren(DeviceComponent)device: QueryList<DeviceComponent>;

  deviceArray;
  constructor(
    private authService: AuthenticationService, 
    private router: Router, 
    private listSvc: ListDevicesService) {
      this.deviceArray = listSvc.listadoDispositivos;      
    }

  async logout(){
    try{
      await this.authService.logout();
      this.router.navigateByUrl('/', {replaceUrl:true});
    }
    catch(error){
      console.log('Error->', error);
    }
  }

  handlerChange(e:any){
    //console.log(e);
  }
}
