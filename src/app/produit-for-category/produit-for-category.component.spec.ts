import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitForCategoryComponent } from './produit-for-category.component';

describe('ProduitForCategoryComponent', () => {
  let component: ProduitForCategoryComponent;
  let fixture: ComponentFixture<ProduitForCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitForCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitForCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
