import { configureStore } from "@reduxjs/toolkit";
import wishlist from "../store/reducer/AppReducer";

const store = configureStore({
  reducer: {
    wishlist,
  },
});
export default store;