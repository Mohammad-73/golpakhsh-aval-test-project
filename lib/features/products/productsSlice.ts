import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "./productsThunk";
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
  productsList: [],
  error: "",
  productsLoading: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get products list
    builder.addCase(productsList.pending, (state) => {
      state.productsLoading = true;
    });
    builder.addCase(productsList.fulfilled, (state, action) => {
      if (action !== undefined && action?.payload?.status === 200) {
        state.productsList = action.payload.data || [];
        state.error = "";
        state.productsLoading = false;
      } else if (action !== undefined && action?.payload?.status === 401) {
        state.productsLoading = false;
      } else {
        toast.error("خطا در دریافت لیست محصولات", {
          position: "bottom-left",
        });
        state.productsLoading = false;
      }
    });
    builder.addCase(productsList.rejected, (state, action) => {
      state.productsLoading = false;
      state.error = action.error.message || "خطا در برقراری ارتباط";
      toast.error("خطا در برقراری ارتباط", {
        position: "bottom-left",
      });
    });
  },
});

export default productsSlice.reducer;
