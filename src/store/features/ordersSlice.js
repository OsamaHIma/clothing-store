import { createSlice } from "@reduxjs/toolkit";

const initialState = { orders: [] };
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addItemToOrders: (state, { payload }) => {
      state.orders = [...state.orders, ...payload];
      console.log(state.orders);
    },
  },
});
export const { addItemToOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
