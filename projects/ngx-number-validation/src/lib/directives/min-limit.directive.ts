import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { NumberService } from '../number.service';

@Directive({
  selector: '[numberMinLimit]'
})
export class MinLimitDirective {

  private element: HTMLInputElement;

  @Input() numberMinLimit: number | string;

  constructor(private elementRef: ElementRef, private numberService: NumberService) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('keydown', ['$event'])
  onkeydown(event: KeyboardEvent) {
    if (this.parsedNumber(this.numberMinLimit) >= 0) {
      if (event.key === '-') {
        event.preventDefault();
        return false;
      }
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (this.parsedNumber(this.element.value) < this.parsedNumber(this.numberMinLimit)) {
      this.element.value = this.parsedNumber(this.numberMinLimit).toString();
    }
  }

  parsedNumber(num?: number | string): number {
    if (typeof num === 'undefined') {
      num = this.numberMinLimit;
    }

    if (typeof num === 'number') {
      return num;
    } else if (typeof num === 'string') {
      const toint = Number(num);

      if (!isNaN(toint)) {
        return toint;
      }
    }

    return undefined;
  }

}
