import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.find((item) => item.id == action.payload.id)
        ? (state.items = state.items.map((prev) => {
            if (prev.id == action.payload.id) {
              return { ...prev, quantity: prev.quantity + 1 };
            } else {
              return prev;
            }
          }))
        : state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload.id);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
