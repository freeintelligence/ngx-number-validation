import { ValidatorFn, AbstractControl } from '@angular/forms';

import { Utils } from 'number-validation';

/**
 * Min validator
 */
export function MinValidator(min: string | number, decimalSeparator: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return Utils.toInt(control.value, decimalSeparator) < Utils.toInt(min, decimalSeparator) ? { numberMin: { value: control.value } } : null;
  };
}
