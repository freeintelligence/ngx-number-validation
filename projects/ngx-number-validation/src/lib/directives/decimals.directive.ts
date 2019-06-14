import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { NumberService } from '../number.service';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[ngModel][numberDecimals]',
  providers: [NgModel],
})
export class DecimalsDirective {

  private element: HTMLInputElement;

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
      }).format(this.element.value);
      this.model.update.emit(this.element.value);
    }
  }

}
