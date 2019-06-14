import { Injectable, Optional } from '@angular/core';

import { Transform } from 'number-validation';

export class NumberServiceConfig {
  decimalSeparator = '.';
  thousandSeparator = ',';
  decimalCount = 32;
}

@Injectable()
export class NumberService {

  transform: Transform;

  constructor(@Optional() public config: NumberServiceConfig) {
    this.transform = new Transform(this.config.decimalSeparator, this.config.thousandSeparator, this.config.decimalCount);
  }

}
