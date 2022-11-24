import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

export const loggedinSlice = createSlice({
  name: 'loggedin',
  initialState: {
    value: false,
  },
  reducers: {
      }
})

// Action creators are generated for each case reducer function
export const { login, logout } = loggedinSlice.actions

export default loggedinSlice.reducer