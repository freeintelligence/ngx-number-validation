import { ValidatorFn, AbstractControl } from '@angular/forms';

import { Utils } from 'number-validation';

/**
 * Max validator
 */
export function MaxValidator(max: string | number, decimalSeparator: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return Utils.toInt(control.value, decimalSeparator) > Utils.toInt(max, decimalSeparator) ? { numberMax: { value: control.value } } : null;
  };
}
