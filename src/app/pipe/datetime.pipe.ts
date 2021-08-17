import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe extends 
             DatePipe implements PipeTransform {
  /**
   * Convierte el valor de fecha y hora ingresado en el valor deseado y-M-d h:mm:ss
   * @param value Fecha ingresada
   * @param args None
   * @returns devuelve la hora en su formato deseado
   */
  transform(value: any, args?: any): any {
    return super.transform(value, "y-M-d h:mm:ss");
  }
}