import { useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import c from './HomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/moviesOps';
import { selectError, selectLoading } from '../../redux/moviesSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMovies({ path: 'trending/movie/day' }));
  }, [dispatch]);

  {
    error && toast.error('Oops... something went wrong.', { id: 'error' });
  }

  return (
    <div>
      <h1 className={c.title}>Discover Today&apos;s Hottest Hits</h1>
      {loading && !error && <Loader />}
      <MovieList />
      <Toaster />
    </div>
  );
};

export default HomePage;
