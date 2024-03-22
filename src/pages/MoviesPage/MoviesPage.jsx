import { useEffect } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import c from './MoviesPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/moviesOps';
import { selectError, selectLoading } from '../../redux/moviesSlice';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    dispatch(fetchMovies({ path: 'search/movie', params: { query } }));
  }, [dispatch, query]);

  {
    error && toast.error('Oops... something went wrong.', { id: 'error' });
  }

  return (
    <div>
      <p className={c.text}>
        Discover your next movie with ease at <span className={c.logo}>MoviePulse</span>. Browse
        thousands of titles, from blockbusters to classics, with detailed descriptions and ratings.
        Start exploring now!
      </p>
      <SearchBox />
      {loading && !error && query && <Loader />}
      <MovieList />
      <Toaster />
    </div>
  );
};

export default MoviesPage;
