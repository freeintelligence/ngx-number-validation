import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxNumberValidationModule } from 'ngx-number-validation';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    NgxNumberValidationModule.forRoot({ decimalSeparator: ',', thousandSeparator: '.', decimalCount: 2 }),
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
