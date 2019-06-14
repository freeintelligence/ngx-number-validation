import { Injectable, Optional } from '@angular/core';

export class NumberServiceConfig {
  decimalSeparator = '.';
  thousandSeparator = ',';
  decimalCount = 32;
}

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor(@Optional() config: NumberServiceConfig) { }

}
