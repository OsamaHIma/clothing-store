// import { createContext, useReducer } from "react";
// import { actions } from "../store/index";
// import createAction from "../utils/reducer";

// export const CartContext = createContext({
//   cartItems: [],
//   addItemToCart: () => {},
//   setCartItems: () => {},
//   removeFromCart: () => {},
//   cartTotal: [],
// });

// const INITIAL_VALUES = {
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// export const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// export const removeCartItem = (cartItems, productToRemove) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToRemove.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToRemove.id
        // ? { ...cartItem, quantity: cartItem.quantity - 1 }
//         : cartItem
//     );
//   }
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "SET-CART-ITEMS":
//       return {
//         ...state,
//         ...payload,
//       };
//     default:
//       throw new Error(`unknown type: ${type}`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [{ cartItems, cartCount, cartTotal }, dispatch] = useReducer(
//     cartReducer,
//     INITIAL_VALUES
//   );

//   const updateCartItems = (newCartItems) => {
//     const newCartCount = newCartItems.reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//     const newCartTotal = newCartItems.reduce(
//       (total, item) => total + item.quantity * item.price,
//       0
//     );
//     // dispatch(actions.updateCartItems(newCartCount, newCartTotal));
//     dispatch(
//       createAction("SET-CART-ITEMS", {
//         cartItems: newCartItems,
//         cartTotal: newCartTotal,
//         cartCount: newCartCount,
//       })
//     );
//   };

//   const addItemToCart = (product) => {
//     const newCartItems = addCartItem(cartItems, product);
//     updateCartItems(newCartItems);
//   };
//   const removeFromCart = (product) => {
//     const newCartItems = removeCartItem(cartItems, product);
//     updateCartItems(newCartItems);
//   };

//   const clearItemFormCart = (item) => {
//     const newCartItems = cartItems.filter((product) => product !== item);
//     updateCartItems(newCartItems);
//   };

//   const value = {
//     addItemToCart,
//     cartItems,
//     cartCount,
//     cartTotal,
//     removeFromCart,
//     clearItemFormCart,
//   };
//   return (
//     <CartContext.Provider value={value}> {children} </CartContext.Provider>
//   );
// };
