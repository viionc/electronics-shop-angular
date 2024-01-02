import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../data/products';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../cart-reducer/cart.actions';
import { CartReducerItem } from '../../cart-reducer/cart.reducer';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getItemById } from '../../cart-reducer/cart.selectors';
import { ControlButtonsComponent } from '../../other-components/item-control-buttons/control-buttons.component';
import { trigger, transition, style, animate } from '@angular/animations';

const slideToCart = trigger('slideToCart', [
  transition(':enter', [
    style({ top: '50%', left: '50%' }),
    animate('0.45s', style({ top: '-2000px', left: '2500px', height: 0 })),
  ]),
]);

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  imports: [CommonModule, ControlButtonsComponent],
  animations: [slideToCart],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  itemAmount$: Observable<number | undefined>;
  playAnimation = false;

  constructor(private store: Store<{ cart: CartReducerItem[] }>) {
    this.itemAmount$ = this.store.select(getItemById(this.product?.id));
  }
  ngOnInit() {
    this.itemAmount$ = this.store.select(getItemById(this.product?.id));
  }

  addItemToCart(id: number) {
    this.playAnimation = true;
    setTimeout(() => {
      this.playAnimation = false;
    }, 400);
    this.store.dispatch(addToCart({ productId: id }));
  }
  removeItemFromCart(id: number) {
    this.store.dispatch(removeFromCart({ productId: id }));
  }
  clearItemFromCart(id: number) {
    this.store.dispatch(removeFromCart({ productId: id, clear: true }));
  }
}
