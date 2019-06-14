import { Injectable, Optional } from '@angular/core';

import { Transform } from 'number-validation';

export class NumberServiceConfig {
  decimalSeparator ? = '.';
  thousandSeparator ? = ',';
  decimalCount ? = 32;
}

@Injectable()
export class NumberService {

  constructor(@Optional() public config: NumberServiceConfig) { }

  public transform(options: NumberServiceConfig = { }) {
    options.decimalSeparator = typeof options.decimalSeparator === 'string' ? options.decimalSeparator : this.config.decimalSeparator;
    options.thousandSeparator = typeof options.thousandSeparator === 'string' ? options.thousandSeparator : this.config.thousandSeparator;
    options.decimalCount = typeof options.decimalCount === 'number' && !isNaN(options.decimalCount) ? options.decimalCount : this.config.decimalCount;

    return new Transform(options.decimalSeparator, options.thousandSeparator, options.decimalCount);
  }

}
