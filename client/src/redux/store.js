import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./slices/itemsSlice";
import dogsReducer from "./slices/dogSlice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    // dogs: dogsReducer,
  },
});

export default store;
