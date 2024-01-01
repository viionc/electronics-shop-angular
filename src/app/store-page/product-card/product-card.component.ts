import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../data/products';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../cart-reducer/cart.actions';
import { CartReducerItem } from '../../cart-reducer/cart.reducer';
import { Observable } from 'rxjs';
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
  itemAmount$: Observable<number | undefined>;

  constructor(private store: Store<{ cart: CartReducerItem[] }>) {
    this.itemAmount$ = this.store.select(getItemById(this.product?.id));
  }
  ngOnInit() {
    this.itemAmount$ = this.store.select(getItemById(this.product?.id));
  }

  addItemToCart(id: number) {
    this.store.dispatch(addToCart({ productId: id }));
  }
  removeItemFromCart(id: number) {
    this.store.dispatch(removeFromCart({ productId: id }));
  }
  clearItemFromCart(id: number) {
    this.store.dispatch(removeFromCart({ productId: id, clear: true }));
  }
}
