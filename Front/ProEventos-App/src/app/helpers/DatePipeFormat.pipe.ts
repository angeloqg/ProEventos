import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../util/Constants';

@Pipe({
  name: 'DatePipeFormat'
})

// Criação de um Pipe para sobrescrever um Pipe existente
export class DatePipeFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }

}
