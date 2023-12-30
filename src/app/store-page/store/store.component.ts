import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import PRODUCTS from '../../../data/products';
import { ProductComponent } from '../product/product.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [NgForOf, ProductComponent, ProductCardComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent {
  products = PRODUCTS;
}
