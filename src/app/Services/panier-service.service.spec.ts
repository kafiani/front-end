import { TestBed } from '@angular/core/testing';

import { PanierServiceService } from './panier-service.service';

describe('PanierServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanierServiceService = TestBed.get(PanierServiceService);
    expect(service).toBeTruthy();
  });
});
