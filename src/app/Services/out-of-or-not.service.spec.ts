import { TestBed } from '@angular/core/testing';

import { OutOfOrNotService } from './out-of-or-not.service';

describe('OutOfOrNotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutOfOrNotService = TestBed.get(OutOfOrNotService);
    expect(service).toBeTruthy();
  });
});
