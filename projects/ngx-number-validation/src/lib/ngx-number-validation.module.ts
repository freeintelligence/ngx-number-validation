import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MinLimitDirective } from './directives/min-limit.directive';

@NgModule({
  declarations: [MinLimitDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MinLimitDirective],
})
export class NgxNumberValidationModule { }
