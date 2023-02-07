import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addItemToOrders } from "./ordersSlice";

const initialState = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

// const dispatch = useDispatch();

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartItems: (state, { payload }) => {
      const newCartCount = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const newCartTotal = state.cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      state.cartTotal = newCartTotal;
      state.cartCount = newCartCount;
    },
    addItemToCart: (state, { payload }) => {
      const newCartItems = addCartItem(state.cartItems, payload);
      state.cartItems = newCartItems;
    },
    removeFromCart: (state, { payload }) => {
      const newCartItems = removeCartItem(state.cartItems, payload);
      state.cartItems = newCartItems;
    },
    clearItemFormCart: (state, { payload }) => {
      const newCartItems = state.cartItems.filter(
        (product) => product.id !== payload.id
      );
      state.cartItems = newCartItems;
    },
    clearCartItems: (state, { payload }) => {
      // dispatch(addItemToOrders(...state.cartItems))
      state.cartItems = [];
      state.cartCount = 0;
      state.cartTotal = 0;
    },
  },
});

export const {
  updateCartItems,
  clearItemFormCart,
  removeFromCart,
  addItemToCart,
  clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
