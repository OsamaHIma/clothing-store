import { createSlice } from "@reduxjs/toolkit";
import {
  onAuthStateChangedListener,
  createUserDocument,
} from "E:/Games/clothing-store/src/utils/firebase/firebase";

const initialState = {
  currentUser: null,
  // setCurrentUser: () => null,
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
export default userSlice.reducer;