import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trendingSeries: [],
  popularSeries: [],
  seriesByGenre: {},
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
      state.popularSeries = action.payload;
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
      const genresHashMap = action.payload.reduce((acc, item) => ({ ...acc, [item.id]: item }),{});
      state.genres = genresHashMap;
    }
  }
});

export const { setTrendingSeries, setTvGenres, setPopularSeries, setSeriesByGenre } = seriesSlice.actions;

export default seriesSlice.reducer;
