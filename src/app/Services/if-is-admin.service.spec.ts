import { TestBed } from '@angular/core/testing';

import { IfIsAdminService } from './if-is-admin.service';

describe('IfIsAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IfIsAdminService = TestBed.get(IfIsAdminService);
    expect(service).toBeTruthy();
  });
});
