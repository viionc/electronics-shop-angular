import { createFeature, createReducer, on } from '@ngrx/store';
import { addToCart, clearCart, removeFromCart } from './cart.actions';
import PRODUCTS, { Product } from '../../data/products';

export type CartReducerItem = {
  productId: number;
  amount: number;
};

const initialState: CartReducerItem[] = [];

const cartFeature = createFeature({
  name: 'cart',
  reducer: createReducer(
    initialState,
    on(addToCart, (state, action) => {
      const { productId } = action;
      const index = state.findIndex((item) => item.productId === productId);
      if (index === -1) {
        return [...state, { productId, amount: 1 }];
      }
      const temp = JSON.parse(JSON.stringify(state)) as CartReducerItem[];
      temp[index].amount++;

      return temp;
    }),
    on(removeFromCart, (state, action) => {
      const { productId } = action;
      const index = state.findIndex((item) => item.productId === productId);
      let temp = JSON.parse(JSON.stringify(state)) as CartReducerItem[];
      temp[index].amount--;
      if (temp[index].amount === 0) {
        temp.splice(index, 1);
      }
      return temp;
    })
  ),
});

export const { name: cartFeatureName, reducer: cartReducer } = cartFeature;
