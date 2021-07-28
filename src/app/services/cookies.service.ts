import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookies: CookieService) { }


  //metodo para guardar cosas en el las cookies
  setDataFromCookies(key: string, value: string){
    this.cookies.set(key, value);
  }

  getDataFromCookies(key:string){
    return this.cookies.get(key);
  }

  deleteDataFromCookies(key:string){
    this.cookies.delete(key);
  }

}
