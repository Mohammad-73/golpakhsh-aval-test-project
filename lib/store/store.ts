import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");
import productsReducer from "../features/products/productsSlice";
import cartSlice from "../features/cart/cartSlice";

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
