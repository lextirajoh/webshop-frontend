import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { productsFetch } from './productsSlice';
import cartReducer, { getTotals } from './cartSlice';
import wishlistReducer, {getTotal} from './wishlistSlice';
import authReducer from './authSlice';
import { productsApi } from './productsApi';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals()); // cart
store.dispatch(getTotal()); // wishlist
