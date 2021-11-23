import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularMovies: [],
  movieDetails: [],
  moviesByGenre: {},
  genres: []
}

export const moviesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = [...state.movieDetails, action.payload];
    },
    setMoviesByGenre: (state, action) => {
      state.moviesByGenre = {
        ...state.moviesByGenre,
        [action.payload.genre]: action.payload.movies
      }
    },
    setMovieGenres: (state, action) => {
      state.genres = action.payload;
    }
  }
});

export const { setPopularMovies, setMovieDetails, setMoviesByGenre, setMovieGenres } = moviesSlice.actions;

export default moviesSlice.reducer;
