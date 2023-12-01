import { configureStore } from "@reduxjs/toolkit";
import videoCounter from "./slices/videoCounterSlice";
import isDarkMode from "./slices/darkModeSlice";

export const store = configureStore({
  reducer: {
    videoCounter: videoCounter,
    isDarkMode: isDarkMode,
  },
});

export default store;
