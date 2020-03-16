import { TestBed } from '@angular/core/testing';

import { EverythingService } from './everything.service';

describe('EverythingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EverythingService = TestBed.get(EverythingService);
    expect(service).toBeTruthy();
  });
});
