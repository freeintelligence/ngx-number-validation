import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MinLimitDirective } from './directives/min-limit.directive';
import { MaxLimitDirective } from './directives/max-limit.directive';

@NgModule({
  declarations: [MinLimitDirective, MaxLimitDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MinLimitDirective],
})
export class NgxNumberValidationModule { }
