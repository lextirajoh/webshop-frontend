import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  wishlistItems: localStorage.getItem('wishlistItems')
    ? JSON.parse(localStorage.getItem('wishlistItems'))
    : [],
    wishlistTotalQuantity: 0,
    
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        const tempProduct = { ...action.payload, wishlistQuantity: 1 };
        state.wishlistItems.push(tempProduct);
        toast.success(`${action.payload.title} toegevoegd aan wenslijst`)
      
      } else if (itemIndex >= 0) {
        toast.info(`${action.payload.title} staat al op je wenslijst`);
      }
      // after adding to state, also add to localstorage
      localStorage.setItem(
        'wishlistItems',
        JSON.stringify(state.wishlistItems)
      );
    },

    // Remove: keep only the items that do not match payload id
    removeFromWishlist(state, action) {
      const filteredWishlistItems = state.wishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== action.payload.id
      );
      state.wishlistItems = filteredWishlistItems;

      toast.error(`${action.payload.title} verwijderd van wenslijst`);
      localStorage.setItem(
        'wishlistItems',
        JSON.stringify(state.wishlistItems)
      );
    },

    // Clear all items
    clearWishlist(state, action) {
      state.wishlistItems = [];
      toast.error(`Wenslijst leeggemaakt`);
      localStorage.setItem(
        'wishlistItems',
        JSON.stringify(state.wishlistItems)
      );
    },

    // getTotal(state, action) {
    //   let { quantity } = state.wishlistItems.reduce(
    //     (wishlistTotal, wishlistItem) => {
    //       const { wishlistQuantity } = wishlistItem;
    //       wishlistTotal.quantity += wishlistQuantity;
    //       return wishlistTotal;
    //     },
    //     {
    //       quantity: 0,
    //     }
    //   );
    //   state.wishlistTotalQuantity = quantity;
    // },

    getTotal(state, action) {
      let { total, quantity } = state.wishlistItems.reduce(
        (wishlistTotal, wishlistItem) => {
          const { price, wishlistQuantity } = wishlistItem;
          const itemTotal = price * wishlistQuantity;

          wishlistTotal.total += itemTotal;
          wishlistTotal.quantity += wishlistQuantity;

          return wishlistTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.wishlistTotalQuantity = quantity;
      state.wishlistTotalAmount = total;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist, getTotal } =
wishlistSlice.actions;
export default wishlistSlice.reducer;
