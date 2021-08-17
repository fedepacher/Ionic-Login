import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {

  /**
   * Constructor de la clase TitleDirective, cambia el color tamaño y tipo de letra, utilizado en los titulos  
   * @param _el   referencia al elemento html 
   * 
   */
  constructor(private _el:ElementRef) { 
    this._el.nativeElement.style.fontSize = '25px';
    this._el.nativeElement.style.fontWeight = 'bold';
    this._el.nativeElement.style.color = 'white';
 
   }

}
