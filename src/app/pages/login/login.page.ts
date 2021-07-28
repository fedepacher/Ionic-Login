import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';
import { CookiesService } from '../../services/cookies.service';
import { TOKEN_KEY } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb:FormBuilder, 
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private cookies: CookiesService) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['cityslicka', [Validators.required, Validators.minLength(6)]],
    });
  }


  async login(){
    try{
      const loading = await this.loadingController.create();
      await loading.present();
      this.authService.login(this.credentials.value).subscribe(
        async (res) => {
          this.cookies.setDataFromCookies(TOKEN_KEY, res.token);
          await loading.dismiss();
          this.router.navigateByUrl('/tabs', {replaceUrl:true});
        },
        async (res) => {
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Login failed',
            message: res.error.error,
            buttons: ['OK'],
          });
          await alert.present();
        }
      )
    }
    catch(error){
      console.log('Error->', error);
    }
  }

  async register() {
    try{
      this.router.navigateByUrl('/register', {replaceUrl:true});
    }
    catch(error){
      console.log('Error->', error);
    }
  }


  get email(){
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

}
