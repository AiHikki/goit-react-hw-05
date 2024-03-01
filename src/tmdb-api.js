import axios from 'axios';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA5YjMzMDJiMWRmZGFjOTJlNGRhZDVhMGExYzU1YiIsInN1YiI6IjY1ZTIyMTg4NTFmOTlhMDBjNzU1Y2Q4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5POR1WxyhVOy1eRWWmZaN2xxoOl2tbnQRqXpYhcXmE';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers['Authorization'] = 'Bearer' + API_TOKEN;

export const fetchData = async params => {
  const { data } = await axios.get('', { params });
  return data;
};
