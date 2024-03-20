import { useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import c from './HomePage.module.css';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/moviesOps';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ path: 'trending/movie/day' }));
  }, [dispatch]);

  return (
    <div>
      <h1 className={c.title}>Discover Today&apos;s Hottest Hits</h1>
      <MovieList />
      <Toaster />
    </div>
  );
};

export default HomePage;
