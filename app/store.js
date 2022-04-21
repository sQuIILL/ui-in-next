import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import categorySlice from '../features/category/categorySlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loadState,saveState } from './localStorage'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    category: categorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
  preloadedState: loadState(),
})

store.subscribe(() => {
  saveState({
    cart: store.getState().cart
  });
});

setupListeners(store.dispatch)