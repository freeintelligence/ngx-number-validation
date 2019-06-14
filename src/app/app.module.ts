import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxNumberValidationModule } from 'ngx-number-validation';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxNumberValidationModule.forRoot({ decimalSeparator: ',', thousandSeparator: '.', decimalCount: 2 }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
