import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type loginData = {
  username: string;
  password: string;
};

type products = {
  username: string;
  accessToken: string;
  error: string;
  loading: boolean;
  url: string;
};

const initialState = {
  cart: [],
};

const cartSlice: any = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cart = [];
    },
    removeFromCart: (state) => {
      state.cart = [];
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
