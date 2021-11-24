import { configureStore } from '@reduxjs/toolkit';
// Slices
import { moviesSlice } from '../slices';

export const store = configureStore({
  reducer: {
    movies: moviesSlice
  }
});
