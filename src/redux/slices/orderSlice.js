import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const createOrder = createAsyncThunk("order/createOrder", async (order) => {
  const response = await api.post("/purchases", order);
  return response.data;
});

const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: [],
    totalAmount: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    clearOrder: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
        state.totalAmount = action.payload.totalAmount;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
