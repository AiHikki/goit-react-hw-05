import { createSlice } from '@reduxjs/toolkit';
import { fetchMovieById, fetchMovies } from './moviesOps';

const handlePending = state => {
  state.loading = true;
  state.error = false;
};
const handleRejected = state => (state.error = true);

const slice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, handlePending)
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

export const selectMovies = state => state.movies.items;
