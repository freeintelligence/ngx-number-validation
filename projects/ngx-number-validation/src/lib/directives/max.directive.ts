import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

import { NumberService } from '../number.service';

@Directive({
  selector: '[numberMax]',
  providers: [NgModel, FormControlName],
})
export class MaxDirective {

  private element: HTMLInputElement;

  @Input() numberMax: number | string;
  @Input() numberDecimals: number | string;

  constructor(private elementRef: ElementRef, private numberService: NumberService, private model: NgModel, private formControlName: FormControlName) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('keyup', ['$event'])
  onkeyup(event: KeyboardEvent) {
    const key = event.key;

    if (!(key === '-' || key === this.numberService.config.decimalSeparator || key === this.numberService.config.thousandSeparator)) {
      this.element.value = this.numberService.transform({
        decimalCount: Number(this.numberDecimals)
      }).max(this.element.value, this.numberMax);

      if (this.model && this.model.update && this.model.update.emit) {
        this.model.update.emit(this.element.value);
      }
      if (this.formControlName && this.formControlName.control && this.formControlName.control.setValue) {
        this.formControlName.control.setValue(this.element.value);
      }
    }
  }

}
