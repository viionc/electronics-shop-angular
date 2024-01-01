import { createSelector } from '@ngrx/store';
import { CartReducerItem } from './cart.reducer';
import PRODUCTS from '../../data/products';

export const selectCart = (state: { cart: CartReducerItem[] }) => state.cart;
export const getItemById = (id: number) =>
  createSelector(selectCart, (state) => {
    return state.find((item) => item.productId === id)?.amount;
  });

export const getTotalValue = (state: { cart: CartReducerItem[] }) =>
  state.cart.reduce((acc, cur) => {
    const item = PRODUCTS.find((item) => item.id === cur.productId);
    if (!item) return acc + 0;
    return acc + item.price * cur.amount;
  }, 0);
