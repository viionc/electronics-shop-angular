// import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';
import PRODUCTS, { Product } from '../../../data/products';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addToCart } from '../../cart-reducer/cart.actions';
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
export class StoreComponent {
  products = Object.entries(PRODUCTS).map((product) => [
    parseInt(product[0]),
    product[1],
  ]) as [number, Product][];
}
