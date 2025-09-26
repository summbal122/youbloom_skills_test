import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice"; 

const appStore = configureStore({
  reducer: {
    items: itemsReducer, 
  },
});

export default appStore;
