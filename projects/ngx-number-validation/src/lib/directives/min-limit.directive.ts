import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[numberMinLimit]'
})
export class MinLimitDirective {

  private element: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;

    console.log(this.element);
  }

  @HostListener('keyup')
  onKeyUp() {

  }

}
