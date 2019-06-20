import { ValidatorFn, AbstractControl } from '@angular/forms';

import { Utils } from 'number-validation';

/**
 * Max validator
 */
export function MaxValidator(max: string | number, decimalSeparator: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if ((typeof control.value === 'string' && !control.value.length) || (control.value === null) || (isNaN(control.value) || typeof control.value === 'undefined')) {
      return null;
    }

    return Utils.toInt(control.value, decimalSeparator) > Utils.toInt(max, decimalSeparator) ? { numberMax: { value: control.value } } : null;
  };
}
