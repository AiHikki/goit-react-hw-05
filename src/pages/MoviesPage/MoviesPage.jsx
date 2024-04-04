import { useEffect } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import c from './MoviesPage.module.css';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/movies/operations';
import toast from 'react-hot-toast';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    dispatch(fetchMovies({ path: 'search/movie', params: { query } }))
      .unwrap()
      .catch(() => toast.error('Oops... Something went wrong.', { id: 'error' }));
  }, [dispatch, query]);

  return (
    <div>
      <p className={c.text}>
        Discover your next movie with ease at <span className={c.logo}>MoviePulse</span>. Browse
        thousands of titles, from blockbusters to classics, with detailed descriptions and ratings.
        Start exploring now!
      </p>
      <SearchBox />
      {/* {loading && query && <Loader />} */}
      <MovieList />
    </div>
  );
};

export default MoviesPage;
