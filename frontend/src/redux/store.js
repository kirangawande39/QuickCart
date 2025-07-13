import { configureStore } from "@reduxjs/toolkit"; // Redux store create karne ka modern way

// Slice reducers import kiye
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

// Store banaya — jisme tino reducers combine kiye
export const store = configureStore({
  reducer: {
    auth: authReducer,       // Login/logout
    product: productReducer, // Product listing, loading
    cart: cartReducer,       // Add/remove cart items
  },
});
