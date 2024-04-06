import { useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import c from './HomePage.module.css';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/movies/operations';
import toast from 'react-hot-toast';
import 'animate.css';
import clsx from 'clsx';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ path: 'trending/movie/day' }))
      .unwrap()
      .catch(() => toast.error('Oops... Something went wrong.', { id: 'error' }));
  }, [dispatch]);

  return (
    <div>
      <h1 className={clsx(c.title, 'animate__animated', 'animate__slideInLeft')}>
        Discover Today&apos;s Hottest Hits
      </h1>
      <MovieList />
    </div>
  );
};

export default HomePage;
