// ./src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";

// 創建store
const store = configureStore({
  reducer: {
    nameSlice,
  },
});

export default store;
