import { Injectable } from '@angular/core';

import { NumberService } from './number.service';

import { NumberValidators } from './validators';

@Injectable()
export class ValidatorsService {

  constructor(private numberService: NumberService) { }

  min(min: string | number) {
    return NumberValidators.min(min, this.numberService.getConfig().decimalSeparator);
  }

  max(max: string | number) {
    return NumberValidators.max(max, this.numberService.getConfig().decimalSeparator);
  }

}
