import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: window.localStorage.getItem("cartItem")
      ? JSON.parse(window.localStorage.getItem("cartItem"))
      : [],
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
      window.localStorage.setItem("cartItem", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload.id);
      window.localStorage.setItem("cartItem", JSON.stringify(state.items));
    },
    updateItem: (state, action) => {
      if (action.payload.type == "inc") {
        state.items = state.items.map((prev) => {
          if (prev.id == action.payload.id) {
            return { ...prev, quantity: prev.quantity + 1 };
          } else {
            return prev;
          }
        });
      } else {
        state.items = state.items.map((prev) => {
          if (prev.id == action.payload.id) {
            if (prev.quantity <= 1) {
              return { ...prev, quantity: 1 };
            } else {
              return { ...prev, quantity: prev.quantity - 1 };
            }
          } else {
            return prev;
          }
        });
      }
      window.localStorage.setItem("cartItem", JSON.stringify(state.items));
    },
    clearCart: (state, action) => {
      state.items = [];
      window.localStorage.setItem("cartItem", JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, updateItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
