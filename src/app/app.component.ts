import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { NumberValidators } from 'ngx-number-validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number: string;

  form: FormGroup = new FormGroup({
    number: new FormControl('', [ NumberValidators.min(5000, ',') ]),
  });

  constructor() {
  }

  typeof(data: any) {
    return typeof data;
  }

}
