import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
let store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: cartReducer,
  },
});
export default store;
