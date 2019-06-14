import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NumberService } from '../number.service';

@Directive({
  selector: '[numberDecimals]'
})
export class DecimalsDirective {

  private element: HTMLInputElement;

  @Input() numberDecimals: number | string;

  constructor(private elementRef: ElementRef, private numberService: NumberService) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('keyup', ['$event'])
  onkeyup(event: KeyboardEvent) {
    const key = event.key;

    if (!(key === '-' || key === this.numberService.config.decimalSeparator || key === this.numberService.config.thousandSeparator)) {
      this.element.value = this.numberService.transform({
        decimalCount: Number(this.numberDecimals)
      }).format(this.element.value);
    }
  }

}
