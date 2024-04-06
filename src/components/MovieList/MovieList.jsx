import MoviesListItem from '../MoviesListItem/MoviesListItem';
import { Link, useLocation } from 'react-router-dom';
import c from './MovieList.module.css';
import { useSelector } from 'react-redux';
import { selectMovies } from '../../redux/movies/selectors';
import 'animate.css';
import clsx from 'clsx';

const MovieList = () => {
  const location = useLocation();
  const movies = useSelector(selectMovies);

  return (
    <ul className={clsx(c.list, 'animate__animated', 'animate__slideInLeft')}>
      {movies.map(movie => (
        <li className={clsx(c.listItem)} key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <MoviesListItem movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
