import { Pipe, PipeTransform } from '@angular/core';
import { NumberService, NumberServiceConfig } from '../number.service';

export interface FormatPipeOptions {
  decimalSeparator: string;
  thousandSeparator: string;
  decimalCount: number;
}

@Pipe({
  name: 'numberFormat'
})
export class FormatPipe implements PipeTransform {

  constructor(private numberService: NumberService) { }

  transform(value: string | number, options: FormatPipeOptions | number): any {
    const realOptions: NumberServiceConfig = { };

    if (typeof options === 'number') {
      realOptions.decimalCount = options;
    } else if (typeof options === 'object' && options !== null) {
      if (typeof options.decimalCount === 'number') {
        realOptions.decimalCount = options.decimalCount;
      }
      if (typeof options.decimalSeparator === 'string') {
        realOptions.decimalSeparator = options.decimalSeparator;
      }
      if (typeof options.thousandSeparator === 'string') {
        realOptions.thousandSeparator = options.thousandSeparator;
      }
    }

    return this.numberService.transform(realOptions).format(value);
  }

}
