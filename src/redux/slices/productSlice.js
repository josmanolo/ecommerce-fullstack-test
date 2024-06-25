// src/redux/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, title: 'iPhone 15 Pro', price: 999.99, image: 'images/iphone13.jpg' },
    { id: 2, title: 'Sony WH-1000XM4', price: 349.99, image: 'images/sony_wh1000xm4.jpg' },
    { id: 3, title: 'MacBook Pro 16', price: 1999.99, image: 'images/macbook_pro.jpg' },
    { id: 4, title: 'Samsung Galaxy Watch 4', price: 249.99, image: 'images/galaxy_watch4.jpg' },
    { id: 5, title: 'JBL Flip 5', price: 119.99, image: 'images/jbl_flip5.jpg' },
    { id: 6, title: 'LG OLED55CXPUA', price: 1499.99, image: 'images/lg_oled55.jpg' },
    { id: 7, title: 'Logitech MX Master 3', price: 99.99, image: 'images/logitech_mx_master3.jpg' },
    { id: 8, title: 'Corsair K95 RGB Platinum', price: 199.99, image: 'images/corsair_k95.jpg' },
    { id: 9, title: 'Canon EOS R5', price: 3899.99, image: 'images/canon_eos_r5.jpg' },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
