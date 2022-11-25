import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  // check if there are cartItems in localstorage.
  // if yes, parse json to javascript.
  // if no, set an empty array.
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else if (itemIndex === -1) {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} toegevoegd aan je mandje.`);
      }
      // after adding to state, also add to localstorage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity >= 2) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        
      } else {
        const filteredCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = filteredCartItems;
        toast.error(`${action.payload.title} verwijderd uit je mandje.`);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    // Remove: keep only the items that do not match payload id
    removeFromCart(state, action) {
      const filteredCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = filteredCartItems;

      toast.error(`${action.payload.title} verwijderd uit je mandje.`);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    // Clear all items
    clearCart(state, action) {
      state.cartItems = [];
      toast.error(`Mandje leeggemaakt.`);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, clearCart, getTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
