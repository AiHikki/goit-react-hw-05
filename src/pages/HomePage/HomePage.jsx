import { useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import c from './HomePage.module.css';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/movies/operations';
import toast from 'react-hot-toast';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ path: 'trending/movie/day' }))
      .unwrap()
      .catch(() => toast.error('Oops... Something went wrong.', { id: 'error' }));
  }, [dispatch]);

  return (
    <div>
      <h1 className={c.title}>Discover Today&apos;s Hottest Hits</h1>
      <MovieList />
    </div>
  );
};

export default HomePage;
