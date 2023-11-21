import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Product } from '../product';
import { By } from '@angular/platform-browser';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = new Product(1, 'gravo', 15, 5);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise price', () => {
    const currentPrice = component.product.price;

    component.raisePrice();

    expect(component.product.price).toBe(currentPrice + 5);
  });

  it('should render the product name', () => {
    const liName = fixture.debugElement.query(By.css('#name'));

    expect(liName.nativeElement.textContent).toContain(component.product.name);
  });
});
