import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../data/products';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { addToCart } from '../../store-state/store.actions';
import { Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../cart-reducer/cart.actions';
import { CartReducerItem } from '../../cart-reducer/cart.reducer';
import { Observable, map, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getItemById } from '../../cart-reducer/cart.selectors';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  imports: [CommonModule],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() id!: string;
  src = '';
  itemAmount$: Observable<number | undefined>;

  ngOnInit() {
    this.src = `/assets/products/product-${this.id}.png`;
    this.itemAmount$ = this.store.select(getItemById(parseInt(this.id)));
  }
  constructor(private store: Store<{ cart: CartReducerItem[] }>) {
    this.itemAmount$ = this.store.select(getItemById(parseInt(this.id)));
  }

  addToCart(id: string) {
    const _id = parseInt(id);
    this.store.dispatch(addToCart({ productId: _id }));
  }
  removeFromCart(id: string) {
    const _id = parseInt(id);
    this.store.dispatch(removeFromCart({ productId: _id }));
  }
}
