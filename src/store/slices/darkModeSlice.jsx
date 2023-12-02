import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = localStorage.getItem("isDarkMode") || "light";

export const darkModeSlice = createSlice({
  name: "isDarkMode",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    toggle: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
      localStorage.setItem("isDarkMode", state.value);
    },
  },
});

export const { toggle } = darkModeSlice.actions;
export default darkModeSlice.reducer;
