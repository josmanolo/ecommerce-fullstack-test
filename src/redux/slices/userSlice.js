import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
    email: 'user@example.com',
    name: 'John Doe'
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
