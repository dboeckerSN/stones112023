import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Observable<Product[]> = inject(ProductService).getList();
}
