import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { MinLimitDirective } from './directives/min-limit.directive';
import { MaxLimitDirective } from './directives/max-limit.directive';
import { DecimalsDirective } from './directives/decimals.directive';

import { NumberServiceConfig, NumberService } from './number.service';

@NgModule({
  declarations: [MinLimitDirective, MaxLimitDirective, DecimalsDirective],
  exports: [MinLimitDirective, MaxLimitDirective, DecimalsDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class NgxNumberValidationModule {

  static forRoot(config: NumberServiceConfig): ModuleWithProviders {
    return {
      ngModule: NgxNumberValidationModule,
      providers: [
        { provide: NumberServiceConfig, useValue: config },
        NumberService
      ]
    };
  }

}
