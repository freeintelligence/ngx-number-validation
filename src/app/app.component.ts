import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number = 20000;

  form: FormGroup = new FormGroup({
    number: new FormControl(null),
  });

  constructor() {
    setTimeout(() => {
      this.form.controls.number.setValue(0.1);
    }, 1000);
  }

  typeof(data: any) {
    return typeof data;
  }

}
