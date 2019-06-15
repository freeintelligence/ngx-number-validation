import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

import { NumberService } from '../number.service';

@Directive({
  selector: '[numberMaxLimit]',
  providers: [NgModel],
})
export class MaxLimitDirective {

  private element: HTMLInputElement;

  @Input() numberMaxLimit: number | string;
  @Input() numberDecimals: number | string;

  constructor(private elementRef: ElementRef, private numberService: NumberService, private model: NgModel) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('keyup', ['$event'])
  onkeyup(event: KeyboardEvent) {
    const key = event.key;

    if (!(key === '-' || key === this.numberService.config.decimalSeparator || key === this.numberService.config.thousandSeparator)) {
      this.element.value = this.numberService.transform({
        decimalCount: Number(this.numberDecimals)
      }).max(this.element.value, this.numberMaxLimit);
      this.model.update.emit(this.element.value);
    }
  }

}
