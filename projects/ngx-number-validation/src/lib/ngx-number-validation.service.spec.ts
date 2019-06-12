import { TestBed } from '@angular/core/testing';

import { NgxNumberValidationService } from './ngx-number-validation.service';

describe('NgxNumberValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxNumberValidationService = TestBed.get(NgxNumberValidationService);
    expect(service).toBeTruthy();
  });
});
