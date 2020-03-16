import { TestBed } from '@angular/core/testing';

import { IfIsSuperAdminService } from './if-is-super-admin.service';

describe('IfIsSuperAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IfIsSuperAdminService = TestBed.get(IfIsSuperAdminService);
    expect(service).toBeTruthy();
  });
});
