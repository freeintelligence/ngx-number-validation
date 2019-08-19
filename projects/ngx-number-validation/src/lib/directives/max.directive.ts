import { Directive, ElementRef, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

import { BaseFormatDirective } from './base_format.directive';
import { NumberService } from '../number.service';
import { NumberValidators } from './../validators';

@Directive({
  selector: '[numberMax]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true }],
})
export class MaxDirective extends BaseFormatDirective {

  @Input() numberMax: number | string;

  constructor(protected elementRef: ElementRef, protected numberService: NumberService) {
    super(elementRef, numberService);
  }

  format() {
    return this.element.value = this.numberService.transform({
      decimalCount: Number(this.numberDecimals),
      decimalSeparator: this.numberDecimalSeparator,
      thousandSeparator: this.numberThousandSeparator,
    }).max(this.getNativeValue(), this.numberMax);
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (this.numberDisableValidations) {
      return null;
    }
    return NumberValidators.max(this.numberMax, this.numberDecimalSeparator)(control);
  }

}
