import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: null,
  username: null,
  userID: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.userID = action.payload.userID;
    },
    removeActiveUser: (state, action) => {
      state.isLoggedIn = false;
      state.email = null;
      state.username = null;
      state.userID = null;
    },
  },
});

export const { setActiveUser, removeActiveUser } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUsername = (state) => state.auth.username;
export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer;
