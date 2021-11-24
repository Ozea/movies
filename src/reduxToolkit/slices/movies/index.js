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
      const { genre, movies } = action.payload;
      const currentMovies = state.moviesByGenre[genre] || [];
      state.moviesByGenre = {
        ...state.moviesByGenre,
        [genre]: [...currentMovies, ...movies]
      }
    },
    setMovieGenres: (state, action) => {
      const genresHashMap = action.payload.reduce((acc, item) => ({ ...acc, [item.id]: item }),{});
      state.genres = genresHashMap;
    }
  }
});

export const { setPopularMovies, setMovieDetails, setMoviesByGenre, setMovieGenres } = moviesSlice.actions;

export default moviesSlice.reducer;
