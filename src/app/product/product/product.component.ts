import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { CommonModule, NgStyle } from '@angular/common';
import { NettoPipe } from '../../utils/pipes/netto.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  imports: [CommonModule, NettoPipe, MatButtonModule],
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() priceChange = new EventEmitter<number>();

  showPrice = true;

  styleConfig = {
    borderStyle: 'dashed',
  };

  raisePrice() {
    console.log('Alter Preis:' + this.product.price);
    this.product.price += 5;
    console.log('Neuer Preis:' + this.product.price);
    this.priceChange.emit(this.product.price);
  }

  changePrice(price: string) {
    this.product.price = +price;
  }

  togglePrice() {
    this.showPrice = !this.showPrice;
  }
}
