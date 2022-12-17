// import { createContext, useReducer, useEffect } from "react";
// import {
//   onAuthStateChangedListener,
//   createUserDocument,
// } from "../utils/firebase/firebase";

// import createAction from "../utils/reducer";

// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// const userReducer = (state, action) => {
//   switch (action.type) {
//     case "setCurrentUser":
//       return {
//         ...state,
//         currentUser: action.payload,
//       };
//     default:
//       throw new Error(`unknown type ${action.type}`);
//   }
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// export const UserProvider = ({ children }) => {
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  // console.log(currentUser);
  // const setCurrentUser = (user) =>
  //   dispatch(createAction("setCurrentUser", user));

  // const value = { currentUser, setCurrentUser };
//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserDocument(user);
//       }
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   return (
//     <UserContext.Provider value={value}> {children} </UserContext.Provider>
//   );
// };
