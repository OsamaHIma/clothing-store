import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";
import categoriesReducer from "./features/categories";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
