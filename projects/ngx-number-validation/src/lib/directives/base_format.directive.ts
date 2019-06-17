import { HostListener, ElementRef, Input, ContentChild } from '@angular/core';
import { NgModel, FormControlName, AbstractControl, Validator } from '@angular/forms';

import { NumberService } from '../number.service';

export class BaseFormatDirective implements Validator {

  protected element: HTMLInputElement;

  @ContentChild(NgModel, { static: true }) protected model: NgModel;
  @ContentChild(FormControlName, { static: true }) protected formControlName: FormControlName;

  @Input() numberAuto: boolean | string = true;
  @Input() numberDecimals: number | string;
  @Input() numberDecimalSeparator: string = this.numberService.getConfig().decimalSeparator;
  @Input() numberThousandSeparator: string = this.numberService.getConfig().thousandSeparator;

  constructor(protected elementRef: ElementRef, protected numberService: NumberService) {
    this.element = this.elementRef.nativeElement;
  }

  isAuto(): boolean {
    if (typeof this.numberAuto === 'boolean') {
      return this.numberAuto;
    } else if (typeof this.numberAuto === 'string') {
      if (this.numberAuto.toLowerCase() === 'false') {
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

    if (!(key === '-' || key === this.numberService.getConfig().decimalSeparator || key === this.numberService.getConfig().thousandSeparator)) {
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
    return null;
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return null;
  }

}
