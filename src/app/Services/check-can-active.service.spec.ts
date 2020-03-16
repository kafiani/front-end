import { TestBed } from '@angular/core/testing';

import { CheckCanActiveService } from './check-can-active.service';

describe('CheckCanActiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckCanActiveService = TestBed.get(CheckCanActiveService);
    expect(service).toBeTruthy();
  });
});
