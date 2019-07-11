import { Directive, ElementRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { BaseFormatDirective } from './base_format.directive';
import { NumberService } from '../number.service';
import { NumberValidators } from './../validators';

@Directive({
  selector: '[numberMin]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDirective, multi: true }],
})
export class MinDirective extends BaseFormatDirective {

  @Input() numberMin: number | string;

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

  validate(control: AbstractControl): { [key: string]: any } | null {
    return NumberValidators.min(this.numberMin, this.numberDecimalSeparator)(control);
  }

}
