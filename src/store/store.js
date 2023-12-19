import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import newProductReducer from "./newProductSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    newProduct: newProductReducer,
  },
});

export default store;
