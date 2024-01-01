import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartReducerItem } from '../../../cart-reducer/cart.reducer';
import PRODUCTS from '../../../../data/products';
import { clearCart } from '../../../cart-reducer/cart.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  styleUrl: 'cart.component.css',
  imports: [CommonModule],
  template: `
    <article [class]="isOpen ? 'show' : ''">
      <div class="wrapper">
        <button class="close" (click)="handleCart()">x</button>
        <h2>Items in your cart:</h2>
        <ul>
          <li *ngFor="let item of cart$ | async">
            {{ item.amount }}x
            <img [src]="getImageSrc(item.productId)" alt="" />{{
              getItemName(item.productId)
            }}
          </li>
        </ul>
        <button *ngIf="(cart$ | async)?.length" (click)="_clearCart()">
          Clear Cart
        </button>
      </div>
    </article>
  `,
})
export class CartComponent {
  @Input() isOpen!: boolean;
  @Output() EmitEvent = new EventEmitter();

  cart$: Observable<CartReducerItem[] | undefined>;

  constructor(private store: Store<{ cart: CartReducerItem[] }>) {
    this.cart$ = this.store.select('cart');
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
}
