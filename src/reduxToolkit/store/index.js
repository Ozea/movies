import { configureStore } from '@reduxjs/toolkit';
// Slices
import { moviesSlice, seriesSlice, bookingSlice } from '../slices';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    series: seriesSlice,
    booking: bookingSlice,
  }
});
