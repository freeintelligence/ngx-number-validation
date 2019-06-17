import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { MinDirective } from './directives/min.directive';
import { MaxDirective } from './directives/max.directive';
import { DecimalsDirective } from './directives/decimals.directive';

import { FormatPipe } from './pipes/format.pipe';

import { NumberServiceConfig, NumberService } from './number.service';
import { ValidatorsService } from './validators.service';

@NgModule({
  declarations: [MinDirective, MaxDirective, DecimalsDirective, FormatPipe],
  exports: [MinDirective, MaxDirective, DecimalsDirective, FormatPipe],
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
        NumberService,
        ValidatorsService,
      ]
    };
  }

}
