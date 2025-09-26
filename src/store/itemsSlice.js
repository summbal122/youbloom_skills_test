import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: []
  },
  reducers: {
    addItems: (state, action) => {
      state.items = action.payload;
    }
  }
});

export const { addItems } = itemsSlice.actions;
export default itemsSlice.reducer;
