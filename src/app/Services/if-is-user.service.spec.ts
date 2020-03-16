import { TestBed } from '@angular/core/testing';

import { IfIsUserService } from './if-is-user.service';

describe('IfIsUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IfIsUserService = TestBed.get(IfIsUserService);
    expect(service).toBeTruthy();
  });
});
