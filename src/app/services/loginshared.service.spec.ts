import { TestBed } from '@angular/core/testing';

import { LoginsharedserviceService } from './loginsharedservice.service';

describe('LoginsharedserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginsharedserviceService = TestBed.get(LoginsharedserviceService);
    expect(service).toBeTruthy();
  });
});
