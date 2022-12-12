import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  seats: [],
  price: 0,
  date: '',
  time: '',
  movieId: null,
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBooking: (state, action) => {
      const { seats, price, date, time, movieId } = action.payload
      state.seats = seats
      state.price = price
      state.date = date
      state.time = time
      state.movieId = movieId
    },
    resetBooking: (state) => {
      state = initialState
    },
  },
})

export const { setBooking, resetBooking } = bookingSlice.actions

export default bookingSlice.reducer
