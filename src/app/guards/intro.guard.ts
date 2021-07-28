import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import { Plugins } from '@capacitor/core';
//import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
import { CookiesService } from '../services/cookies.service';
//const { Storage } = Plugins;

export const INTRO_KEY = 'intro-seen';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {

  constructor(private router: Router, private cookies: CookiesService) {}

  async canLoad(): Promise<boolean> {
    try{
      const hasSeenIntro = this.cookies.getDataFromCookies(INTRO_KEY);//await Storage.get({key: INTRO_KEY});
      if(hasSeenIntro === 'true'){        
        return true;
      }
      else{
        this.router.navigateByUrl('/intro', { replaceUrl:true});
        return false;
      }
    }
    catch(error){
      console.log('Error->', error);
    }
  }    
  
}
