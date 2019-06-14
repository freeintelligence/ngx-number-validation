import { Injectable, Optional } from '@angular/core';

export class NumberServiceConfig {
  decimalSeparator = '.';
  thousandSeparator = ',';
  decimalCount = 32;
}

@Injectable()
export class NumberService {

  constructor(@Optional() public config: NumberServiceConfig) { }

}
