import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trendingSeries: [],
  genres: []
}

export const seriesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTrendingSeries: (state, action) => {
      state.trendingSeries = action.payload;
    },
    setTvGenres: (state, action) => {
      const genresHashMap = action.payload.reduce((acc, item) => ({ ...acc, [item.id]: item }),{});
      state.genres = genresHashMap;
    }
  }
});

export const { setTrendingSeries, setTvGenres } = seriesSlice.actions;

export default seriesSlice.reducer;
