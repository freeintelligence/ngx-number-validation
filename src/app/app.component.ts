import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { NumberValidators } from 'ngx-number-validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number = 20000;

  form: FormGroup = new FormGroup({
    number: new FormControl(null, [ NumberValidators.min(5000, ',') ]),
  });

  constructor() {
    this.form.controls.number.setValue(10000);
  }

  typeof(data: any) {
    return typeof data;
  }

}
