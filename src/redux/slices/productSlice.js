import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { ASYNC_STATUS } from "../../constants/asyncStatus";
import { FETCH_PRODUCTS } from "../../constants/actionTypes";

export const fetchProducts = createAsyncThunk(FETCH_PRODUCTS, async () => {
  const response = await api.get("/products");

  return response.data;
});


const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = ASYNC_STATUS.PENDING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = ASYNC_STATUS.FULLFILLED;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = ASYNC_STATUS.REJECTED;
        state.error = action.error.message;
      });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
