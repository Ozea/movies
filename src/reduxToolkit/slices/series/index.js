import { createSlice } from '@reduxjs/toolkit';
import { setLSValue } from 'utils/localStorage';

const initialState = {
  trendingSeries: [],
  popularSeries: [],
  popularTvShowsPage: 1,
  seriesByGenre: {},
  favorites: [],
  watchLater: [],
  genres: []
}

export const seriesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTrendingSeries: (state, action) => {
      state.trendingSeries = action.payload;
    },
    setPopularSeries: (state, action) => {
      state.popularSeries = [...state.popularSeries, ...action.payload];
    },
    incrementPopularTvShowsPage: (state, action) => {
      state.popularTvShowsPage += action.payload;
    },
    setFavoriteSerie: (state, action) => {
      const updatedArray = [...state.favorites, action.payload];
      state.favorites = updatedArray;
      setLSValue("favoriteSeries", JSON.stringify(updatedArray));
    },
    removeFavoriteSerie: (state, action) => {
      const updatedArray = state.favorites.filter(fav => fav.id !== action.payload);
      state.favorites = updatedArray;
      setLSValue("favoriteSeries", JSON.stringify(updatedArray));
    },
    setWatchLaterSeries: (state, action) => {
      state.watchLater = [...state.watchLater, action.payload];
    },
    initFavoriteSeries: (state, action) => {
      state.favorites = action.payload;
    },
    initWatchLaterSeries: (state, action) => {
      state.watchLater = action.payload;
    },
    removeWatchLaterSerie: (state, action) => {
      state.watchLater = state.watchLater.filter(later => later !== action.payload);
    },
    setSeriesByGenre: (state, action) => {
      const { genre, series } = action.payload;
      const currentSeries = state.seriesByGenre[genre] || [];
      state.seriesByGenre = {
        ...state.seriesByGenre,
        [genre]: [...currentSeries, ...series]
      }
    },
    setTvGenres: (state, action) => {
      const genresHashMap = action.payload.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
      state.genres = genresHashMap;
    }
  }
});

export const {
  setTrendingSeries,
  incrementPopularTvShowsPage,
  setFavoriteSerie,
  setWatchLaterSeries,
  removeFavoriteSerie,
  initFavoriteSeries,
  initWatchLaterSeries,
  removeWatchLaterSerie,
  setTvGenres,
  setPopularSeries,
  setSeriesByGenre
} = seriesSlice.actions;

export default seriesSlice.reducer;
