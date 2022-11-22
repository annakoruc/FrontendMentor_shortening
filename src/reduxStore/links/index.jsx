import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addLink: (state, action) => {
      console.log("push działa");
      state.push(action.payload);
    },
  },
});

export default linksSlice.reducer;

export const { addLink } = linksSlice.actions;
