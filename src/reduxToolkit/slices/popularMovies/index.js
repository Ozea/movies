import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: []
}

export const popularMoviesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPopularMovies: (state, action) => {
      state.movies = action.payload;
    },
  }
});

export const { setPopularMovies } = popularMoviesSlice.actions;

export default popularMoviesSlice.reducer;
