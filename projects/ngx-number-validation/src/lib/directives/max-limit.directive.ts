import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { NumberService } from '../number.service';

@Directive({
  selector: '[numberMaxLimit]'
})
export class MaxLimitDirective {

  private element: HTMLInputElement;

  @Input() numberMaxLimit: number | string;

  constructor(private elementRef: ElementRef, private numberService: NumberService) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('keyup', ['$event'])
  onkeyup(event: KeyboardEvent) {
    const key = event.key;

    if (!(key === '-' || key === this.numberService.config.decimalSeparator || key === this.numberService.config.thousandSeparator)) {
      this.element.value = this.numberService.transform.max(this.element.value, this.numberMaxLimit);
    }
  }

}
