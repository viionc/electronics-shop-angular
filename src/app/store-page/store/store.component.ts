// import { NgForOf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import PRODUCTS, { Category, Product } from '../../../data/products';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
// import { Observable } from 'rxjs';
// import { Store } from '@ngrx/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
})
export class StoreComponent implements OnChanges {
  @Input() currentCategory!: Category | null;
  products: Product[] = PRODUCTS;

  ngOnChanges() {
    if (this.currentCategory !== null) {
      this.products = PRODUCTS.filter((product) => {
        return product.category === this.currentCategory;
      });
    } else {
      this.products = PRODUCTS;
    }
  }
}
