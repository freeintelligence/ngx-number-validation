import { ValidatorFn, AbstractControl } from '@angular/forms';

import { Utils } from 'number-validation';

/**
 * Min validator
 */
export function MinValidator(min: string | number, decimalSeparator: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if ((typeof control.value === 'string' && !control.value.length) || (control.value === null) || (isNaN(control.value) || typeof control.value === 'undefined')) {
      return null;
    }

    return Utils.toInt(control.value, decimalSeparator) < Utils.toInt(min, decimalSeparator) ? { numberMin: { value: control.value } } : null;
  };
}
