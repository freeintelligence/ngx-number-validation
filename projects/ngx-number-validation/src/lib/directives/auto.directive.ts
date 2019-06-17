import { Directive, ElementRef } from '@angular/core';

import { BaseFormatDirective } from './base_format.directive';
import { NumberService } from '../number.service';

@Directive({
  selector: '[numberAuto]'
})
export class AutoDirective extends BaseFormatDirective {

  constructor(protected elementRef: ElementRef, protected numberService: NumberService) {
    super(elementRef, numberService);
  }

  format() {
    return this.element.value = this.numberService.transform({
      decimalCount: Number(this.numberDecimals),
      decimalSeparator: this.numberDecimalSeparator,
      thousandSeparator: this.numberThousandSeparator,
    }).format(this.element.value);
  }

  isAuto() {
    return true;
  }

}
