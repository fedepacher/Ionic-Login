import { Component, OnInit, ViewChild } from '@angular/core';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { CookiesService } from '../../services/cookies.service';
// import { Plugins } from '@capacitor/core';
// const { Storage } = Plugins;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;

  constructor(private router:Router, private cookies: CookiesService) { }

  ngOnInit() {
  }

  next(){
    this.slides.slideNext();
  }

  async start() {
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    try{
      this.cookies.setDataFromCookies(INTRO_KEY, 'true');
      this.router.navigateByUrl('/login', {replaceUrl:true});
    }
    catch(error){
      console.log('Error->', error);
    }
  }
}
