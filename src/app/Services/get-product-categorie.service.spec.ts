import { TestBed } from '@angular/core/testing';

import { GetProductCategorieService } from './get-product-categorie.service';

describe('GetProductCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProductCategorieService = TestBed.get(GetProductCategorieService);
    expect(service).toBeTruthy();
  });
});
