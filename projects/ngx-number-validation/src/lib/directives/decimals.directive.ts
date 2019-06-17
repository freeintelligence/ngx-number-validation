import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

import { NumberService } from '../number.service';

@Directive({
  selector: '[numberDecimals]',
  providers: [NgModel, FormControlName],
})
export class DecimalsDirective {

  private element: HTMLInputElement;

  @Input() numberDecimals: number | string;

  constructor(private elementRef: ElementRef, private numberService: NumberService, private model: NgModel, private formControlName: FormControlName) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('keyup', ['$event'])
  onkeyup(event: KeyboardEvent) {
    const key = event.key;

    if (!(key === '-' || key === this.numberService.getConfig().decimalSeparator || key === this.numberService.getConfig().thousandSeparator)) {
      this.element.value = this.numberService.transform({
        decimalCount: Number(this.numberDecimals)
      }).format(this.element.value);

      if (this.model && this.model.update && this.model.update.emit) {
        this.model.update.emit(this.element.value);
      }
      if (this.formControlName && this.formControlName.control && this.formControlName.control.setValue) {
        this.formControlName.control.setValue(this.element.value);
      }
    }
  }

}
