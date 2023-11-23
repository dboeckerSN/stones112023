import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [NgClass, AsyncPipe, ProductComponent, MatCardModule, RouterLink],
})
export class ProductListComponent {
  products: Observable<Product[]> = inject(ProductService).getList();
}
