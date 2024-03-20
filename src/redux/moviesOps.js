import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA5YjMzMDJiMWRmZGFjOTJlNGRhZDVhMGExYzU1YiIsInN1YiI6IjY1ZTIyMTg4NTFmOTlhMDBjNzU1Y2Q4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5POR1WxyhVOy1eRWWmZaN2xxoOl2tbnQRqXpYhcXmE';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers['Authorization'] = 'Bearer ' + API_TOKEN;
axios.defaults.params = {
  language: 'en-US',
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ path, params }, thunkAPI) => {
    try {
      const { data } = await axios.get(path, {
        params,
      });
      return data.results;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMovieById = createAsyncThunk('movies/fetchMovieById', async (path, thunkAPI) => {
  try {
    const { data } = await axios.get(`movie/${path}`);
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
