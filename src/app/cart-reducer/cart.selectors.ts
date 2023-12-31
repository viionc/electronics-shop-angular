import { createSelector } from '@ngrx/store';
import { CartActionProps } from './cart.actions';
import { CartReducerItem } from './cart.reducer';

export const selectCart = (state: { cart: CartReducerItem[] }) => state.cart;
export const getItemById = (id: number) =>
  createSelector(selectCart, (state) => {
    return state.find((item) => item.productId === id)?.amount;
  });
