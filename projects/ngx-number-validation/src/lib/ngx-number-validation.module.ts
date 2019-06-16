import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { MinDirective } from './directives/min.directive';
import { MaxDirective } from './directives/max.directive';
import { DecimalsDirective } from './directives/decimals.directive';

import { NumberServiceConfig, NumberService } from './number.service';

@NgModule({
  declarations: [MinDirective, MaxDirective, DecimalsDirective],
  exports: [MinDirective, MaxDirective, DecimalsDirective],
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
