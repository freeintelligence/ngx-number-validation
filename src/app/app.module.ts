import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxNumberValidationModule } from 'ngx-number-validation';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxNumberValidationModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
