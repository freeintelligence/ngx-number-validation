import { Component } from '@angular/core';
import { NumberService } from 'ngx-number-validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number: string;

  constructor(private numberService: NumberService) {
    console.log('settings', this.numberService.config);
  }

}
