import { configureStore, createSlice } from "@reduxjs/toolkit";

// 创建一个名为 "nameSlice" 的slice，包含初始状态和reducers
const nameSlice = createSlice({
  name: "name",
  initialState: { name: "John Doe" },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload; // 更新名字
    },
  },
});

export const { updateName } = nameSlice.actions; // 導出action

// 創建store
const store = configureStore({
  reducer: nameSlice.reducer,
});

export default store;
