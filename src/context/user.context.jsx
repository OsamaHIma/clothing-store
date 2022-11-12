import { createContext, useReducer, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocument,
} from "../utils/firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const userReducer = (sate, action) => {
  switch (action.type) {
    case "setCurrentUser":
      return {
        ...sate,
        currentUser: action.payload,
      };
    default:
      throw new Error(`unknown type ${action.type}`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, {
    currentUser: null,
  });
  console.log(currentUser);
  const setCurrentUser = (user) =>
    dispatch({ type: "setCurrentUser", payload: user });

  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
