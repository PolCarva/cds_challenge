import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = localStorage.getItem("videoCount")
  ? parseInt(localStorage.getItem("videoCount"))
  : 0;

export const videoCounterSlice = createSlice({
  name: "videoCounter",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    increase: (state) => {
      state.value += 1;
      localStorage.setItem("videoCount", state.value.toString());
    },
  },
});

export const { increase } = videoCounterSlice.actions;
export default videoCounterSlice.reducer;
