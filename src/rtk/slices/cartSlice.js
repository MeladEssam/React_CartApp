import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  initialState: JSON.parse(localStorage.getItem("cart")),
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
      // localStorage.setItem("cart_products", JSON.stringify(state));
      // localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteFromCart: (state, action) => {
      let newState = state.filter(
        (product) => product.id !== action.payload.id
      );
      // localStorage.setItem("cart", JSON.stringify(newState));
      // return state.filter((product) => product.id !== action.payload.id);
      return newState;
    },
    clearCart: () => {
      // localStorage.clear();
      return [];
    },
  },
});
export const { addProductToCart, deleteFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
