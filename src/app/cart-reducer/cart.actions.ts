import { createAction, props } from '@ngrx/store';

export type CartActionProps = {
  productId: number;
};

export const addToCart = createAction(
  '[Cart] Add item',
  props<CartActionProps>()
);
export const removeFromCart = createAction(
  '[Cart] Remove item',
  props<CartActionProps>()
);
export const clearCart = createAction('[Cart] Clear');
