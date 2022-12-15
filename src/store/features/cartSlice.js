import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  setCartItems: () => {},
  removeFromCart: () => {},
};

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
    updateCartItems: (state, action) => {
      const newCartItems = action.payload;
      const newCartCount = newCartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const newCartTotal = newCartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      state.cartItems = newCartItems;
      state.cartTotal = newCartTotal;
      state.cartCount = newCartCount;
    },
    addItemToCart: (state, payload) => {
      const product = payload.product;
      const newCartItems = addCartItem(state.cartItems, product);
      updateCartItems(newCartItems);
    },
    removeFromCart: (state, payload) => {
      const product = payload.product;
      const newCartItems = removeCartItem(state.cartItems, product);
      updateCartItems(newCartItems);
    },

    clearItemFormCart: (state, payload) => {
      const item = payload.item;
      const newCartItems = state.cartItems.filter(
        (product) => product !== item
      );
      updateCartItems(newCartItems);
    },
  },
});

export const {
  updateCartItems,
  clearItemFormCart,
  removeFromCart,
  addItemToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
