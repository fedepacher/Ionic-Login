import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';
import Validation from '../../utils/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentials: FormGroup;
  submitted = false;

  constructor(
    private fb:FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.credentials= this.fb.group({
      fullname: ['', Validators.required],
      map_id: ['', [Validators.required, Validators.min(0), Validators.max(9999)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      role: ['admin']
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    });    
  }


  onSubmit(): void {
    this.submitted = true;
    if(this.credentials.invalid){
      console.log("Error en submit");
      return;
    }
    //console.log(JSON.stringify(this.formRegister.value, null, 2));
    this.register();
  }

  onReset(): void {
    this.submitted=false;
    this.credentials.reset();
  }

  async register(){
    try{
      const loading = await this.loadingController.create();
      await loading.present();
      this.authService.register(this.credentials.value).subscribe(
        async (res) => {
          await loading.dismiss();
          this.router.navigateByUrl('/login', {replaceUrl:true});
        },
        async (res) => {
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Registration failed',
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

  get f(): {[key:string]: AbstractControl}{
    return this.credentials.controls;
  }

}
