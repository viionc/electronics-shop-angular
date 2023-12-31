import { createSelector } from '@ngrx/store';
import { CartReducerItem } from './cart.reducer';
import PRODUCTS from '../../data/products';

export type StoreStateProps = {
  cart: CartReducerItem[];
};

export const selectCart = (state: StoreStateProps) => state.cart;
export const getItemById = (id: number) =>
  createSelector(selectCart, (state) => {
    return state.find((item) => item.productId === id)?.amount;
  });

export const getTotalValue = (state: StoreStateProps) =>
  state.cart
    .reduce((acc, cur) => {
      const item = PRODUCTS.find((item) => item.id === cur.productId);
      if (!item) return acc + 0;
      const newPrice = item.discount
        ? item.price * (1 - item.discount)
        : item.price;
      return acc + newPrice * cur.amount;
    }, 0)
    .toFixed(2);
