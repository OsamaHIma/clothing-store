import { createSlice } from "@reduxjs/toolkit";

const initialState = { categoriesMap: {} };

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // getCategoryMap: async (state, action) => {
    //   const categoryMap = await getCollection();
    //   state.categoriesMap = categoryMap;
    //   console.log(state.categoriesMap);
    // },
    setCategories: (state, { payload }) => {
      state.categoriesMap = payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
