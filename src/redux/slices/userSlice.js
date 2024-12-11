import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { CREATE_USER, FETCH_USER } from "../../constants/actionTypes";
import { ASYNC_STATUS } from "../../constants/asyncStatus";

export const fetchUser = createAsyncThunk(FETCH_USER, async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
});

export const createUser = createAsyncThunk(CREATE_USER, async (user) => {
  const response = await api.post("/users", {
    email: user.email,
    name: user.name,
    password: user.password,
  });

  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {
      email: "",
      name: "",
    },
    status: "idle",
    error: null,
  },
  reducers: {
    clearUser: (state) => {
      state.currentUser = { email: "", name: "" };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = ASYNC_STATUS.PENDING;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = ASYNC_STATUS.FULLFILLED;
        state.currentUser = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = ASYNC_STATUS.REJECTED;
        state.error = action.error.message;
      })
      .addCase(createUser.pending, (state) => {
        state.status = ASYNC_STATUS.PENDING;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = ASYNC_STATUS.FULLFILLED;
        state.currentUser = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = ASYNC_STATUS.REJECTED;
        state.error = action.error.message;
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
