import { configureStore } from '@reduxjs/toolkit';
import videoCounter from './slices/videoCounterSlice';

export const store = configureStore({
  reducer: {
    videoCounter: videoCounter,
  },
});

export default store;