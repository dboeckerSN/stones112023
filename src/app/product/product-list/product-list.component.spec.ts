import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { MatCardModule } from '@angular/material/card';
import { ProductComponent } from '../product/product.component';
import { NettoPipe } from '../../utils/pipes/netto.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { MockProductServie, ProductService } from '../product.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        ProductListComponent,
        ProductComponent,
        NettoPipe,
        MatCardModule,
        RouterTestingModule,
      ],
      providers: [{ provide: ProductService, useClass: MockProductServie }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products from ProductService', () => {
    component.products?.subscribe((products) => {
      expect(products[0].id).toBe(1);
    });
  });
});
