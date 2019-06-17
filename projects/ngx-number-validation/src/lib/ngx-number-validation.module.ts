import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { MinDirective } from './directives/min.directive';
import { MaxDirective } from './directives/max.directive';
import { DecimalsDirective } from './directives/decimals.directive';

import { NumberServiceConfig, NumberService } from './number.service';
import { FormatPipe } from './pipes/format.pipe';

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
        NumberService
      ]
    };
  }

}
