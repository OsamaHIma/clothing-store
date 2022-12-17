import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocument,
} from "E:/Games/clothing-store/src/utils/firebase/firebase";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocument(user);
  //     }
  //     setCurrentUser(user);
  //   });
  //   return unsubscribe;
  // }, []);


export default userSlice.reducer;