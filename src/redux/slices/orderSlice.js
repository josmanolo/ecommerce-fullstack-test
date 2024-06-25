// src/redux/slices/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
    clearOrder: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { setOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
