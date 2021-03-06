import { HostListener, ElementRef, Input, ContentChild, OnInit, AfterViewInit } from '@angular/core';
import { NgModel, FormControlName, AbstractControl, Validator } from '@angular/forms';
import { LEFT_ARROW, RIGHT_ARROW, END, HOME, SHIFT } from '@angular/cdk/keycodes';

import { NumberService } from '../number.service';

export class BaseFormatDirective implements Validator, OnInit, AfterViewInit {

  protected element: HTMLInputElement;

  @ContentChild(NgModel, { static: true }) protected model: NgModel;
  @ContentChild(FormControlName, { static: true }) protected formControlName: FormControlName;

  @Input() numberAuto: boolean | string = true;
  @Input() numberDecimals: number | string;
  @Input() numberDecimalSeparator: string = this.numberService.getConfig().decimalSeparator;
  @Input() numberThousandSeparator: string = this.numberService.getConfig().thousandSeparator;
  @Input() numberDisableValidations = false;

  constructor(protected elementRef: ElementRef, protected numberService: NumberService) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.setValue();
  }

  ngAfterViewInit() {
    this.setValue();

    if (this.model) {
      this.model.valueChanges.subscribe((e: string) => {
        if (typeof e === 'number') {
          e = this.numberService.transform().format(e);
        }
        if (typeof e !== 'string' || !e.length) {
          return;
        }

        const decimalIndex = e.indexOf(this.numberService.getConfig().decimalSeparator);
        const valueLength = e.length;

        if (decimalIndex !== valueLength - 1) {
          this.element.value = this.numberService.transform().format(e);
          this.model.update.emit(this.numberService.transform().toInt(this.element.value));
        }
      });
    } else if (this.formControlName) {
      this.formControlName.valueChanges.subscribe((e: string) => {
        if (typeof e === 'number') {
          e = this.numberService.transform().format(e);
        }
        if (typeof e !== 'string' || !e.length) {
          return;
        }

        const decimalIndex = e.indexOf(this.numberService.getConfig().decimalSeparator);
        const valueLength = e.length;

        if (decimalIndex !== valueLength - 1) {
          this.element.value = this.numberService.transform().format(e);
          this.formControlName.control.setValue(this.numberService.transform().toInt(this.element.value), { emitEvent: false, emitModelToViewChange: false, emitViewToModelChange: true, onlySelf: true });
        }
      });
    }
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
    if (!this.isAuto() || event.keyCode === LEFT_ARROW || event.keyCode === RIGHT_ARROW || event.keyCode === END || event.keyCode === HOME || event.keyCode === SHIFT) {
      event.preventDefault();
      return false;
    }

    const key = event.key;

    if (!(key === '-' || key === this.numberService.getConfig().decimalSeparator || key === this.numberService.getConfig().thousandSeparator )) {
      if (key === '0' && typeof this.element.value === 'string' && this.element.value.length && this.element.value.indexOf(',')) {
        event.preventDefault();
        return false;
      } else {
        this.setValue();
      }
    }
  }

  @HostListener('blur', ['$event'])
  focusout(event: any) {
    this.setValue();
  }

  setValue() {
    const nativeValue = this.getNativeValue();

    if (nativeValue === null || typeof nativeValue === 'undefined' || nativeValue === '') {
      return;
    }

    this.format();

    const strValue = this.element.value;
    const intValue = strValue.length ? this.numberService.transform().toInt(strValue) : null;

    if (this.model && this.model.update && this.model.update.emit) {
      this.model.update.emit(intValue);
    }
    if (this.formControlName && this.formControlName.control && this.formControlName.control.setValue) {
      this.formControlName.control.setValue(intValue);
    }

    this.element.value = strValue;
  }

  getNativeValue() {
    if (this.model && this.model.value) {
      return this.model.value;
    }
    if (this.formControlName && this.formControlName.control && this.formControlName.control.value) {
      return this.formControlName.control.value;
    }

    return this.element.value;
  }

  format() {
    return null;
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return null;
  }

}
