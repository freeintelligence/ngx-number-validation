import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNumberValidationComponent } from './ngx-number-validation.component';

describe('NgxNumberValidationComponent', () => {
  let component: NgxNumberValidationComponent;
  let fixture: ComponentFixture<NgxNumberValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNumberValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNumberValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
