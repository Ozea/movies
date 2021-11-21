import { configureStore } from '@reduxjs/toolkit';
// Slices
import { counterReducer, popularMoviesReducer } from '../slices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    popularMovies: popularMoviesReducer
  }
});
