import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {

  constructor(private _el:ElementRef) { 
    this._el.nativeElement.style.fontSize = '25px';
    this._el.nativeElement.style.fontWeight = 'bold';
    this._el.nativeElement.style.color = 'white';
 
   }

}
