import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stones';
  productParent = new Product(12, 'Granitstein Gravo', 134.56, 12);

  onPriceChanged(price: number) {
    this.productParent.price = price;
    alert('Neuer Preis: ' + price);
  }
}
