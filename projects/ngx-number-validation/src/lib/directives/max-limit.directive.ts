import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[numberMaxLimit]'
})
export class MaxLimitDirective {

  private element: HTMLInputElement;

  @Input() numberMaxLimit: number | string;

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (this.parsedNumber(this.element.value) > this.parsedNumber(this.numberMaxLimit)) {
      this.element.value = this.parsedNumber(this.numberMaxLimit).toString();
    }
  }

  parsedNumber(num?: number | string): number {
    if (typeof num === 'undefined') {
      num = this.numberMaxLimit;
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
