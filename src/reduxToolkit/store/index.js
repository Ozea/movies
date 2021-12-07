import { configureStore } from '@reduxjs/toolkit';
// Slices
import { moviesSlice, seriesSlice } from '../slices';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    series: seriesSlice
  }
});
