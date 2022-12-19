import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
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
    updateCartItems: ({ cartItems, cartTotal, cartCount }, { payload }) => {
      // const newCartItems = payload;
      const newCartCount = payload.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const newCartTotal = payload.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      cartItems = payload;
      cartTotal = newCartTotal;
      cartCount = newCartCount;
    },
    addItemToCart: ({ cartItems }, { payload }) => {
      // const product = payload;
      const newCartItems = addCartItem(cartItems, payload);
      cartSlice.actions.updateCartItems(newCartItems);
      console.log(newCartItems, cartItems);
    },
    removeFromCart: ({ cartItems }, { payload }) => {
      // const product = payload;
      const newCartItems = removeCartItem(cartItems, payload);
      updateCartItems(newCartItems);
    },

    clearItemFormCart: ({ cartItems }, { payload }) => {
      // const item = payload;
      const newCartItems = cartItems.filter((product) => product !== payload);
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
