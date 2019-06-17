import { Directive, HostListener, ElementRef, Input, ContentChild } from '@angular/core';
import { NgModel, FormControlName, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { NumberService } from '../number.service';

import { NumberValidators } from './../validators';

@Directive({
  selector: '[numberMin]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDirective, multi: true }],
})
export class MinDirective implements Validator {

  private element: HTMLInputElement;

  @ContentChild(NgModel, { static: true }) private model: NgModel;
  @ContentChild(FormControlName, { static: true }) private formControlName: FormControlName;

  @Input() numberAuto = true;
  @Input() numberMin: number | string;
  @Input() numberDecimals: number | string;
  @Input() numberDecimalSeparator: string = this.numberService.config.decimalSeparator;
  @Input() numberThousandSeparator: string = this.numberService.config.thousandSeparator;

  constructor(private elementRef: ElementRef, private numberService: NumberService) {
    this.element = this.elementRef.nativeElement;
  }

  isAuto(): boolean {
    if (typeof this.numberAuto === 'boolean') {
      return this.numberAuto;
    } else if (typeof this.numberAuto === 'string') {
      if ((this.numberAuto as string).toLowerCase() === 'false') {
        return false;
      }
    }

    return true;
  }

  @HostListener('keyup', ['$event'])
  onkeyup(event: KeyboardEvent) {
    if (!this.element.value.length || !this.isAuto()) {
      return false;
    }

    const key = event.key;

    if (!(key === '-' || key === this.numberService.config.decimalSeparator || key === this.numberService.config.thousandSeparator)) {
      this.format();

      if (this.model && this.model.update && this.model.update.emit) {
        this.model.update.emit(this.element.value);
      }
      if (this.formControlName && this.formControlName.control && this.formControlName.control.setValue) {
        this.formControlName.control.setValue(this.element.value);
      }
    }
  }

  format() {
    this.element.value = this.numberService.transform({
      decimalCount: Number(this.numberDecimals),
      decimalSeparator: this.numberDecimalSeparator,
      thousandSeparator: this.numberThousandSeparator,
    }).min(this.element.value, this.numberMin);
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return NumberValidators.min(this.numberMin, this.numberDecimalSeparator)(control);
  }

}
