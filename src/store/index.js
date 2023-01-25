import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";
import categoriesReducer from "./features/categories";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  categories: categoriesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export default store;
