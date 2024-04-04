import { createSlice } from '@reduxjs/toolkit';
import { fetchMovieById, fetchMovies } from './operations';

const handlePending = state => {
  state.loading = true;
};
const handleRejected = state => {
  state.loading = false;
};

const slice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
    loading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.items = [];
        handlePending(state);
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, handleRejected)
      .addCase(fetchMovieById.pending, handlePending)
      .addCase(fetchMovieById.fulfilled, state => {
        state.loading = false;
      })
      .addCase(fetchMovieById.rejected, handleRejected);
  },
});

export default slice.reducer;
