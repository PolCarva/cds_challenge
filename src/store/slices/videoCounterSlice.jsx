import { createSlice } from "@reduxjs/toolkit";

export const videoCounterSlice = createSlice({
  name: "videoCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = videoCounterSlice.actions;
export default videoCounterSlice.reducer;
