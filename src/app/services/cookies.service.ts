import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookies: CookieService) { }

  /**
   * Metodo para guardar el token en las cookies de tipo clave:valor
   * @param key 
   * @param value 
   */
  setDataFromCookies(key: string, value: string){
    this.cookies.set(key, value);
  }

  /**
   * Recupera el token de la cookies
   * @param key 
   * @returns 
   */
  getDataFromCookies(key:string){
    return this.cookies.get(key);
  }

  /**
   * Elimina token de la cookie
   * @param key 
   */
  deleteDataFromCookies(key:string){
    this.cookies.delete(key);
  }

}
