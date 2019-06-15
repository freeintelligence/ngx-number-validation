# ngx-number-validation
Validation of numbers to Angular.
Includes pipes, directives, reactive forms among others.

Install with:
```sh
$ npm install ngx-number-validation
```

## Implement in your project
You must import the `NgxNumberValidationModule` module to your main module, next to the` forRoot` method.
```ts
import { NgModule } from '@angular/core';

import { NgxNumberValidationModule } from 'ngx-number-validation';

@NgModule({
  declarations: [
  ],
  imports: [
    NgxNumberValidationModule.forRoot({ decimalSeparator: ',', thousandSeparator: '.', decimalCount: 2 }),
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

### Module options
`decimalSeparator`, `thousandSeparator` and `decimalCount`.

## Directives
### Example
```html
<!-- number between -10 and 10 (with 2 decimals) -->
<input type="text" [(ngModel)]="num" numberMinLimit="-10" numberMaxLimit="10" numberDecimals="2">
```
### numberMinLimit
Limit the possible minimum number for an `input`.
```html
<input type="text" [(ngModel)]="num" numberMinLimit="-10">
```
### numberMaxLimit
Limit the possible maximum number for an `input`.
```html
<input type="text" [(ngModel)]="num" numberMaxLimit="10">
```
### numberDecimals
Limit the possible decimals count for an `input`.
```html
<input type="text" [(ngModel)]="num" numberDecimals="2">
```

## Services
Only one service is occupied and you can access the main instance of the system.
### Transform local number to a native number
```html
<input type="text" [(ngModel)]="num" numberMinLimit="-10" numberMaxLimit="10" numberDecimals="2">

<p>Sum + 4: {{ num }}</p>
```
```ts
import { Component } from '@angular/core';

import { NumberService } from 'ngx-number-validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  num: string;

  constructor(private numberService: NumberService) {
  }

  toMath() {
    return this.numberService.transform().toInt(this.num);
  }

  sum() {
    return this.toMath() + 4;
  }

}

```