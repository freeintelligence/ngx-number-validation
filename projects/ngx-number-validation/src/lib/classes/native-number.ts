import { NumberService } from '../number.service';

/**
 * Native number to string formatted number
 */
export class NativeNumber extends Number {

  constructor(private numberService: NumberService, private value?: any) {
    super(value);
  }

  toString() {
    return this.numberService.transform().format(this.value);
  }

}
