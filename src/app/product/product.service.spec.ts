import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts should return product list', () => {
    // expect(service.getList()[0].id).toBe(0);
  });

  it('should add product to product list', () => {
    // const product = {
    //   id: 47,
    //   name: 'armin',
    //   price: 34,
    //   weight: 56,
    // };
    // service.addProduct(product);
    // expect(service.getList()[0].id).toBe(product.id);
  });
});
