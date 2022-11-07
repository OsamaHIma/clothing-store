import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  setCartItems: () => {},
  removeFromCart: () => {},
  cartTotal: [],
});

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

export const removeCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setCartTotal(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const removeFromCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  };

  const value = {
    addItemToCart,
    cartItems,
    cartCount,
    cartTotal,
    setCartItems,
    removeFromCart,
  };
  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
