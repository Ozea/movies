import { configureStore } from '@reduxjs/toolkit';
// Slices
import { counterReducer } from '../slices';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
