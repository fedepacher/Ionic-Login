import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { CookiesService } from '../services/cookies.service';
import { switchMap, map, tap } from 'rxjs/operators';

export const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';

  constructor(private http:HttpClient, private cookies:CookiesService) { 
    this.loadToken();
  }

  async loadToken(){
    try{
      const token = this.cookies.getDataFromCookies(TOKEN_KEY);
      if (token){
        this.token = token;
        this.isAuthenticated.next(true);
      }
      else{
        this.isAuthenticated.next(false);
      }
    }
    catch(error){
      console.log('Error->', error);
    }
  }

  login(credentials: {email, password}): Observable<any>{
    try{
      this.isAuthenticated.next(true);
      return this.http.post(`https://reqres.in/api/login`, credentials);
      //return this.http.post('http://localhost:3000/auth/login', credentials);
    }
    catch(error){
      console.log('Error->', error);
    }
  }

  register(credentials: {fullname, map_id, email, password, acceptTerms, role}): Observable<any>{
    try{
      return this.http.post('http://localhost:3000/users', credentials);
    }
    catch(error){
      console.log('Error->', error);
    }
  }

  logout() {
    this.isAuthenticated.next(false);
    this.cookies.deleteDataFromCookies(TOKEN_KEY);
  }
}
