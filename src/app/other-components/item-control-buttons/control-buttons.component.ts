import { Component, Input } from '@angular/core';
import { addToCart, removeFromCart } from '../../cart-reducer/cart.actions';
import { CartReducerItem } from '../../cart-reducer/cart.reducer';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  selector: 'app-control-buttons',
  styleUrl: './control-buttons.component.css',
  template: `
    <div class="button-wrapper">
      <button (click)="addItemToCart(id)">
        <img src="./assets/icons/plus.svg" alt="add item" />
      </button>
      <button (click)="removeItemFromCart(id)">
        <img src="./assets/icons/minus.svg" alt="remove item" />
      </button>
      <button (click)="clearItemFromCart(id)">
        <img src="./assets/icons/trashcan.svg" alt="clear item" />
      </button>
    </div>
  `,
})
export class ControlButtonsComponent {
  @Input() id!: number;

  constructor(private store: Store<{ cart: CartReducerItem[] }>) {}

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
