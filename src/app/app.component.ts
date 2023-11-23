import { Component } from '@angular/core';
import { Product } from './product/product';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, RouterLink, DatePipe, MatToolbarModule],
})
export class AppComponent {
  title = 'stones';
  today = new Date();
  // productParent = new Product(12, 'Granitstein Gravo', 134.56, 12);

  // onPriceChanged(price: number) {
  //   this.productParent.price = price;
  //   alert('Neuer Preis: ' + price);
  // }
}
