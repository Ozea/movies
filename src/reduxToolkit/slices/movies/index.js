import { createSlice } from '@reduxjs/toolkit';
import { setLSValue } from 'utils/localStorage';

const initialState = {
  popularMovies: [],
  popularMoviesPage: 1,
  upcoming: [],
  upcomingPage: 1,
  nowPlaying: [],
  nowPlayingPage: 1,
  trendingMovies: [],
  movieDetails: [],
  moviesByGenre: {},
  moviesByGenrePage: 1,
  favorites: [],
  watchLater: [],
  genres: []
}

export const moviesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = [...state.popularMovies, ...action.payload];
    },
    setUpcoming: (state, action) => {
      state.upcoming = [...state.upcoming, ...action.payload];
    },
    incrementUpcomingPage: (state, action) => {
      state.upcomingPage += action.payload;
    },
    setNowPlaying: (state, action) => {
      state.nowPlaying = [...state.nowPlaying, ...action.payload];
    },
    incrementNowPlayingPage: (state, action) => {
      state.nowPlayingPage += action.payload;
    },
    incrementPopularMoviesPage: (state, action) => {
      state.popularMoviesPage += action.payload;
    },
    initFavoriteMovies: (state, action) => {
      state.favorites = action.payload;
    },
    setFavoriteMovie: (state, action) => {
      const updatedArray = [...state.favorites, action.payload];
      state.favorites = updatedArray;
      setLSValue("favoriteMovies", JSON.stringify(updatedArray));
    },
    removeFavoriteMovie: (state, action) => {
      const updatedArray = state.favorites.filter(fav => fav.id !== action.payload);
      state.favorites = updatedArray;
      setLSValue("favoriteMovies", JSON.stringify(updatedArray));
    },
    initWatchLaterMovies: (state, action) => {
      state.watchLater = action.payload;
    },
    setWatchLaterMovie: (state, action) => {
      state.watchLater = [...state.watchLater, action.payload];
    },
    removeWatchLaterMovie: (state, action) => {
      state.watchLater = state.watchLater.filter(later => later !== action.payload);
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
      const genresHashMap = action.payload.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
      state.genres = genresHashMap;
    }
  }
});

export const {
  setPopularMovies,
  setMovieDetails,
  setMoviesByGenre,
  setMovieGenres,
  setUpcoming,
  incrementUpcomingPage,
  setNowPlaying,
  incrementNowPlayingPage,
  setWatchLaterMovie,
  setFavoriteMovie,
  removeFavoriteMovie,
  removeWatchLaterMovie,
  initWatchLaterMovies,
  initFavoriteMovies,
  setTrendingMovies,
  incrementPopularMoviesPage
} = moviesSlice.actions;

export default moviesSlice.reducer;
