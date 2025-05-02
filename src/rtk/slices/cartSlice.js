import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  initialState:
    localStorage.getItem("cart") === null
      ? []
      : JSON.parse(localStorage.getItem("cart")),
  name: "cartSlice",
  reducers: {
    addProductToCart: (state, action) => {
      let foundedProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (foundedProduct) {
        foundedProduct.quantity += 1;
      } else {
        let newProduct = { ...action.payload, quantity: 1 };
        state.push(newProduct);
      }
    },
    deleteFromCart: (state, action) => {
      let newState = state.filter(
        (product) => product.id !== action.payload.id
      );
      return newState;
    },
    clearCart: () => {
      return [];
    },
  },
});
export const { addProductToCart, deleteFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
