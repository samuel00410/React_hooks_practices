// ./src/redux/nameSlice.js
import { createSlice } from "@reduxjs/toolkit";

// 创建一个名为 "nameSlice" 的slice，包含初始状态和reducers
const nameSlice = createSlice({
  name: "name",
  initialState: {
    name: "John",
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateName } = nameSlice.actions;

export default nameSlice.reducer;
