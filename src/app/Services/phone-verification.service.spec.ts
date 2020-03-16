import { TestBed } from '@angular/core/testing';

import { PhoneVerificationService } from './phone-verification.service';

describe('PhoneVerificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneVerificationService = TestBed.get(PhoneVerificationService);
    expect(service).toBeTruthy();
  });
});
