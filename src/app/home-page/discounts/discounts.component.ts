import { Component } from '@angular/core';
import PRODUCTS from '../../../data/products';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-discounts',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  styleUrl: './discounts.component.css',
  template: `<article>
    <div class="container">
      <h2>Current Discounts:</h2>
      <div class="wrapper">
        <a
          *ngFor="let product of discountedProducts"
          routerLink="/store"
          routerLinkActive="active"
          ariaCurrentWhenActive="page"
        >
          <span class="discount"
            >-{{ convertToPercent(product.discount) }}</span
          >
          <h3>{{ product.name }}</h3>
          <img
            [src]="'/assets/products/product-' + product.id + '.png'"
            [alt]="product.name"
          />
        </a>
      </div>
    </div>
  </article>`,
})
export class DiscountsComponent {
  discountedProducts = PRODUCTS.filter((product) => product.discount);

  convertToPercent(discount: number | undefined) {
    return (discount as number) * 100 + '%!!';
  }
}
