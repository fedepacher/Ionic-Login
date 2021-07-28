import { AbstractControl, ValidatorFn } from "@angular/forms";
//– First, the validator returns null (meaning validation has passed) if there is any error on the control that we want to check (confirm password).
//– Then, the validator checks that two fields match or not and set error on checking control if validation fails.

export default class Validation {
    static match(controlName: string, checkControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
          const control = controls.get(controlName);
          const checkControl = controls.get(checkControlName);
            //el ? significa que el objeto no ppuede ser nulo
          if (checkControl?.errors && !checkControl.errors.matching) {
            console.log("Confirmacion password vacia")
            return null;
          }
    
          if (control?.value !== checkControl?.value) {
            controls.get(checkControlName)?.setErrors({ matching: true });
            console.log("Confirmacion password no coincide")
            return { matching: true };
          } else {
            console.log("Confirmacion password coincide")
            return null;
          }
        };
      }
    }