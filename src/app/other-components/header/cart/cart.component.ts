import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartReducerItem } from '../../../cart-reducer/cart.reducer';
import PRODUCTS from '../../../../data/products';
import {
  addToCart,
  clearCart,
  removeFromCart,
} from '../../../cart-reducer/cart.actions';
import { getTotalValue } from '../../../cart-reducer/cart.selectors';
import { ControlButtonsComponent } from '../../item-control-buttons/control-buttons.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  styleUrl: 'cart.component.css',
  imports: [CommonModule, ControlButtonsComponent],
  template: `
    <article [class]="isOpen ? 'show' : ''">
      <div class="wrapper">
        <button class="close" (click)="handleCart()">
          <img src="./assets/icons/close.svg" alt="close cart" />
        </button>
        <h2>Items in your cart:</h2>
        <ul>
          <li *ngFor="let item of cart$ | async">
            <span>{{ item.amount }}x</span>
            <img [src]="getImageSrc(item.productId)" alt="" />
            <span class="name"> {{ getItemName(item.productId) }}</span>
            <span class="price">
              {{ getTotalPrice(item.productId, item.amount) }}$</span
            >
            <app-control-buttons [id]="item.productId"></app-control-buttons>
          </li>
        </ul>
        <div class="button-wrapper">
          <button
            class="bigger"
            *ngIf="(cart$ | async)?.length"
            (click)="_clearCart()"
          >
            Clear Cart
          </button>
        </div>
        <div class="total-price" *ngIf="(cart$ | async)?.length">
          {{ total$ | async }}$
        </div>
      </div>
    </article>
  `,
})
export class CartComponent {
  @Input() isOpen!: boolean;
  @Output() EmitEvent = new EventEmitter();

  cart$: Observable<CartReducerItem[] | undefined>;
  total$: Observable<number>;

  constructor(private store: Store<{ cart: CartReducerItem[] }>) {
    this.cart$ = this.store.select('cart');
    this.total$ = this.store.select(getTotalValue);
  }

  handleCart() {
    this.EmitEvent.emit();
  }

  getItemName(id: number) {
    const item = PRODUCTS.find((item) => item.id === id);
    return item?.name;
  }
  getImageSrc(id: number) {
    return '/assets/products/product-' + id + '.png';
  }

  _clearCart() {
    this.store.dispatch(clearCart());
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
  getTotalPrice(id: number, amount: number) {
    const item = PRODUCTS.find((item) => item.id === id);
    if (!item) return 0;
    return item.price * amount;
  }
}
